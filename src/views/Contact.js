import React from "react"
import styled, { keyframes, css } from "styled-components"
import media from "../theme/media"
import Button from "../components/atoms/Button/Button"
import { Formik, Form, Field } from "formik"
import axios from "axios"
import * as Yup from "yup"

const ScaleBox = keyframes`
  0% {
    min-width: 0%;
    opacity: 1;
  }
  100% {
    min-width: 100%;
    opacity: 1;
  }
`

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  subject: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  content: Yup.string()
    .min(5, "Too Short!")
    .required("Required"),
})

const ContactContainer = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.phone`
    width: 100%;
    height: 50%;
  `}
`

const ContactContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  :before {
    content: "";
    position: absolute;
    right: 0;
    min-width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.yellow};
    z-index: -1;
    opacity: 0;
    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBox} 1.3s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
      `};
  }
`

const StyledButton = styled(Button)`
  margin-top: 2rem;
  width: 200px;
  height: 80px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.white};

  &:before {
    border: 1px solid ${({ theme }) => theme.white};
  }

  &:after {
    border: 1px solid ${({ theme }) => theme.black};
  }
`

const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  animation: ${({ active }) =>
    active &&
    css`
      ${FadeIn} 1.3s 1.3s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  .contact-inputs {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  input {
    width: 40%;
    background: none;
    border: 1px solid ${({ theme }) => theme.black};
    padding: 10px 14px;
    margin: 0 10px;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.white};
    font-family: "Montserrat", sans-serif;

    ::placeholder {
      color: ${({ theme }) => theme.white};
    }
  }

  textarea {
    width: calc(80% + 20px);
    height: 80%;
    background: none;
    border: 1px solid ${({ theme }) => theme.black};
    padding: 1rem 1.4rem;
    margin: 2rem 1rem 0 1rem;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.white};
    resize: none;
    font-family: "Montserrat", sans-serif;

    ::placeholder {
      color: ${({ theme }) => theme.white};
    }
  }
`

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: false }
  }

  componentDidUpdate() {
    if (
      this.props.active === true &&
      this.props.active !== this.state.activeTab
    ) {
      this.setState({ activeTab: this.props.active })
    }
  }

  render() {
    const { activeTab } = this.state
    return (
      <ContactContainer active={activeTab}>
        <ContactContent active={activeTab}>
          <Formik
            initialValues={{ email: "", subject: "", content: "" }}
            validate={values => {
              let errors = {}
              if (!values.email) {
                errors.email = "Required"
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address"
              }
              return errors
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              SignupSchema.isValid({
                email: values.email,
                subject: values.subject,
                content: values.content,
              })
                .then(function() {
                  axios({
                    method: "post",
                    url:
                      "https://cors-anywhere.herokuapp.com/https://o30d2yrza3.execute-api.eu-west-1.amazonaws.com/default/portfolio_lambda",
                    data: {
                      email: values.email,
                      subject: values.subject,
                      content: values.content,
                    },
                  })
                    .then(function() {
                      resetForm()
                      alert.success("Message sent!")
                    })
                    .catch(function() {
                      alert.error("Error :/")
                    })
                })
                .catch(function() {
                  alert.show("Fill in all the fields")
                })
            }}
          >
            {({ isSubmitting }) => (
              <StyledForm active={activeTab}>
                <div className="contact-inputs">
                  <Field name="email" type="email" placeholder="E-mail" />
                  <Field name="subject" type="text" placeholder="Subject" />
                </div>
                <Field
                  name="content"
                  component="textarea"
                  placeholder="Message"
                />
                <StyledButton type="submit" disabled={isSubmitting}>
                  Submit
                </StyledButton>
              </StyledForm>
            )}
          </Formik>
        </ContactContent>
      </ContactContainer>
    )
  }
}

export default Contact
