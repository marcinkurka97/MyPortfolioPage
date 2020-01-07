import React from "react"
import styled, { keyframes, css } from "styled-components"
import Heading from "../components/atoms/Heading/Heading"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import Button from "../components/atoms/Button/Button"
import NavLink from "../components/atoms/NavLink/NavLink"
import KasiaPortfolio from "../assets/kasiaPortfolio.jpg"
import media from "../theme/media"
import ContentTemplate from "../template/ContentTemplate"

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
const ScaleBoxAfter = keyframes`
  0% {
    min-width: 0%;
    opacity: 1;
  }
  100% {
    min-width: 100%;
    opacity: 1;
  }
`

const StyledHeading = styled(Heading)`
  width: 100%;
  opacity: 0;
  padding: 0 2rem 3rem 2rem;
  color: ${({ theme }) => theme.yellow};
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 2s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
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
    font-size: 2.8rem;
    text-align: left;
    padding: 1rem 0;
    margin: 0;
  `}
`

const DescriptionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  ${media.phone`
    flex-direction: column;
    width: calc(100% - 6rem);
  `}
`

const LeftDescription = styled.div`
  width: 40%;
  height: 100%;

  ${media.phone`
    width: 100%;
    height: auto;
    order: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `}
`

const ProjectImage = styled.div`
  position: relative;
  height: 100%;
  width: 55%;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    min-width: 100%;
    height: 100%;
    opacity: 0;
    background: ${({ theme }) => theme.yellow};
    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBoxAfter} 2s 1.5s cubic-bezier(.34,.615,.4,.985) both
      `};
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    min-width: 100%;
    height: 100%;
    opacity: 0;
    background-image: url(${KasiaPortfolio});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 60% center;
    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBox} 1.5s 2.25s cubic-bezier(.34,.615,.4,.985) both
      `};
  }

  ${media.phone`
    height: 25vh;
    width: 100%;
    order: 1;
  `}
`

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  padding: 0 2rem 3rem 2rem;
  opacity: 0;
  font-family: "Lato", sans-serif;
  font-size: 2.4rem;
  line-height: 2.8rem;
  text-align: justify;
  color: ${({ theme }) => theme.gray};
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 2.25s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.laptop`
    font-size: 1.8rem;
  `}

  ${media.tablet`
    font-size: ${({ theme }) => theme.fontSize.l};
  `}

  ${media.phone`
    font-size: 1.4rem;
    padding: 0 0 1rem 0;
    height: auto;
  `}
`

const ProjectButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 2.5s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.phone`
    width: 100%;
    justify-content: space-between;
  `}
`

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.gray};
  font-family: "Lato", sans-serif;
`

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.gray};
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: "Lato", sans-serif;

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

class SecondProject extends React.Component {
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
        <DescriptionContainer>
          <ProjectImage active={activeTab} />
          <LeftDescription>
            <StyledHeading active={activeTab} big>
              Graphic designer Portfolio
            </StyledHeading>
            <StyledParagraph active={activeTab}>
              One page portfolio for a graphic designer made in Gatsby. Sending
              mails handled by AWS Lambda.
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
          </LeftDescription>
        </DescriptionContainer>
      </ContentTemplate>
    )
  }
}

export default SecondProject
