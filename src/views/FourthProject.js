import React from "react"
import styled, { keyframes, css } from "styled-components"
import Heading from "../components/atoms/Heading/Heading"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import Button from "../components/atoms/Button/Button"
import NavLink from "../components/atoms/NavLink/NavLink"
import KasiaPortfolio from "../assets/kasiaPortfolio.jpg"
import media from "../theme/media"
import ContentTemplate from "../template/ContentTemplate"

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

const TextSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -200%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0%, 0);
  }
`

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    right: 0;
    min-width: 100%;
    height: 100%;
    background: url(${KasiaPortfolio});
    background-size: cover;
    filter: blur(2px);
    transform: scale(1.05);
    z-index: -1;
    opacity: 0;
    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBox} 1.3s 1s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
      `};
  }
`

const StyledHeading = styled(Heading)`
  width: 100%;
  opacity: 0;
  padding: 0 0 3rem 0;
  color: ${({ theme }) => theme.yellow};
  text-align: center;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.laptop`
    font-size: 6rem;
    margin-bottom: 1rem;
  `}

  ${media.tablet`
    font-size: ${({ theme }) => theme.fontSize.xxl};
    margin-bottom: 2rem;
  `}

  ${media.phone`
    font-size: ${({ theme }) => theme.fontSize.xl};
  `}
`

const DescriptionContainer = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, 0.65);
  z-index: 2;
  opacity: 0;

  animation: ${({ active }) =>
    active &&
    css`
      ${FadeIn} 1.3s 2s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};
`

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  padding: 0 2rem 2rem 2rem;
  opacity: 0;
  font-family: font44146, sans-serif;
  font-size: 2.4rem;
  line-height: 2.8rem;
  text-align: justify;
  color: ${({ theme }) => theme.white};
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 0.25s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.laptop`
    font-size: 1.8rem;
  `}

  ${media.tablet`
    font-size: ${({ theme }) => theme.fontSize.l};
  `}

  ${media.phone`
    font-size: ${({ theme }) => theme.fontSize.s};
  `}
`

const ProjectButtons = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 20%;
  padding: 0 2rem;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 0.5s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};
`

const StyledButton = styled(Button)`
  margin: 0;
  color: ${({ theme }) => theme.white};
`

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 300;

  &:hover {
    transform: initial;
    border-bottom: 1px solid ${({ theme }) => theme.yellow};
  }

  ${media.tablet`
    font-size: 2.5rem;
  `}

  ${media.phone`
    font-size: ${({ theme }) => theme.fontSize.xs};
  `}
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
      <ContentTemplate
        id="fourth-project-page"
        active={activeTab}
        type="Projects."
        imageContent
      >
        <ContentContainer active={activeTab}>
          <DescriptionContainer active={activeTab}>
            <StyledHeading active={activeTab} big>
              Graphic designer Portfolio
            </StyledHeading>
            <StyledParagraph active={activeTab}>
              Simple one page portfolio for a graphic designer. Site made in
              Gatsby. Sending mails handled by AWS Lambda.
              <br />
              <br />
            </StyledParagraph>
            <ProjectButtons active={activeTab}>
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
          </DescriptionContainer>
        </ContentContainer>
      </ContentTemplate>
    )
  }
}

export default FourthProject
