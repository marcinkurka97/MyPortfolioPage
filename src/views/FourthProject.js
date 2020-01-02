import React from "react"
import styled, { keyframes, css } from "styled-components"
import Heading from "../components/atoms/Heading/Heading"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import Button from "../components/atoms/Button/Button"
import NavLink from "../components/atoms/NavLink/NavLink"
import KasiaPortfolio from "../assets/kasiaPortfolio.jpg"

const ScaleBox = keyframes`
  0% {
    min-height: 0%;
    opacity: 1;
  }
  100% {
    min-height: 70%;
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

const ProjectContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProjectContent = styled.div`
  position: relative;
  width: 70%;
  min-height: 70%;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${KasiaPortfolio});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 60%;

  animation: ${({ active }) =>
    active &&
    css`
      ${ScaleBox} 2s cubic-bezier(.34,.615,.4,.985) both
    `};
`

const StyledHeading = styled(Heading)`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 10%;
  font-size: 6rem;
  color: ${({ theme }) => theme.yellow};
  justify-content: flex-start;
  margin-top: -3%;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${FadeIn} 1s 2s cubic-bezier(.34,.615,.4,.985) both
    `};
`

const ProjectDescription = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  position: absolute;
  left: 1.5%;
  bottom: 3%;
  width: 30%;
  background: rgba(255, 255, 255, 0.75);
  padding: 1.5rem;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${FadeIn} 1s 2s cubic-bezier(.34,.615,.4,.985) both
    `};
`

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
`

const ProjectButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 2.5rem 0 0 0;
`

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.black};
`

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.black};
  border-bottom: 1px solid ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSize.s};

  &:hover {
    transform: initial;
    border-bottom: 1px solid ${({ theme }) => theme.yellow};
  }
`

class FourthProject extends React.Component {
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
      <ProjectContainer id="fourth-project-page">
        <ProjectContent active={activeTab}>
          <StyledHeading active={activeTab}>
            Graphic designer Portfolio
          </StyledHeading>
          <ProjectDescription active={activeTab}>
            <StyledParagraph>
              Simple one page portfolio for a graphic designer. Site made in
              Gatsby. Sending mails handled by AWS Lambda.
            </StyledParagraph>
            <ProjectButtons>
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://kasiamichalska.netlify.com/"
              >
                <StyledButton>Preview</StyledButton>
              </a>

              <StyledNavLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/patinos123/kasiamichalska-portfolio"
              >
                GitHub Code
              </StyledNavLink>
            </ProjectButtons>
          </ProjectDescription>
        </ProjectContent>
      </ProjectContainer>
    )
  }
}

export default FourthProject
