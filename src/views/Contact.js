import React from "react"
import styled from "styled-components"
import Heading from "../components/atoms/Heading/Heading"
import Button from "../components/atoms/Button/Button"
import { Formik, Form, Field } from "formik"
import axios from "axios"
import * as Yup from "yup"

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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledButton = styled(Button)`
  margin-top: 2rem;
  width: 200px;
  height: 80px;
  font-size: ${({ theme }) => theme.fontSize.m};
`

const StyledForm = styled(Form)`
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;

  .contact-inputs {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  input {
    width: 40%;
    background: none;
    border: 1px solid white;
    padding: 10px 14px;
    margin: 0 10px;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.white};
  }

  textarea {
    width: calc(80% + 20px);
    height: 80%;
    background: none;
    border: 1px solid white;
    padding: 1rem 1.4rem;
    margin: 2rem 1rem 0 1rem;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.white};
  }
`

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ContactContainer id="contact-page">
        <Heading big>Contact</Heading>
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
            <StyledForm>
              <div className="contact-inputs">
                <Field name="email" type="email" placeholder="E-mail" />
                <Field name="subject" type="text" placeholder="Temat" />
              </div>
              <Field
                name="content"
                component="textarea"
                placeholder="Wiadomość"
              />
              <StyledButton type="submit" disabled={isSubmitting}>
                Submit
              </StyledButton>
            </StyledForm>
          )}
        </Formik>
      </ContactContainer>
    )
  }
}

export default Contact
