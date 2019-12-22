import React from "react"
import styled, { keyframes, css } from "styled-components"
import Heading from "../components/atoms/Heading/Heading"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import Button from "../components/atoms/Button/Button"
import NavLink from "../components/atoms/NavLink/NavLink"
import SortingImg from "../assets/sorting.png"

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
    transform: translate(-2.5%, 5%);
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

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProjectDescriptionContainer = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ProjectDescription = styled.div`
  width: 70%;
  height: auto;
`

const ProjectImageContainer = styled.div`
  position: absolute;
  right: 0;
  height: 50%;
  width: 50%;
  z-index: 5;
`

const ProjectImageBox = styled.div`
  position: absolute;
  right: 0;
  min-width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.yellow};
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${ScaleBoxAfter} 1.3s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};
`

const ProjectImage = styled.div`
  position: absolute;
  right: 0;
  min-width: 100%;
  height: 100%;
  background-image: url(${SortingImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${ScaleBox} 1.3s 0.25s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};
`

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.yellow};
  margin-bottom: 3rem;
  width: 100%;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};
`

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  text-align: left;
  color: ${({ theme }) => theme.gray};
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};
`

const ProjectButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1s 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
    `};
`

const StyledNavLink = styled(NavLink)`
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  font-size: ${({ theme }) => theme.fontSize.s};

  &:hover {
    transform: initial;
    border-bottom: 1px solid ${({ theme }) => theme.yellow};
  }
`

const StyledButton = styled(Button)`
  margin: 3rem 0;
`

class FirstProject extends React.Component {
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
      <ProjectContainer id="first-project-page">
        <ProjectDescriptionContainer>
          <ProjectDescription>
            <StyledHeading big active={activeTab}>
              Sorting Visualizer App
            </StyledHeading>
            <StyledParagraph active={activeTab}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam id odit unde quasi molestiae rerum. Voluptatibus
              veritatis saepe quae beatae facilis, in natus nam laborum eum
              autem neque impedit sapiente odio soluta repellat, doloribus
              suscipit voluptates aliquid.
            </StyledParagraph>
            <ProjectButtons active={activeTab}>
              <StyledButton>Preview</StyledButton>
              <StyledNavLink>GitHub Code</StyledNavLink>
            </ProjectButtons>
          </ProjectDescription>
        </ProjectDescriptionContainer>
        <ProjectImageContainer>
          <ProjectImageBox active={activeTab} />
          <ProjectImage active={activeTab} />
        </ProjectImageContainer>
      </ProjectContainer>
    )
  }
}

export default FirstProject
