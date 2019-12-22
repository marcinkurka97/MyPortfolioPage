import React from "react"
import styled, { keyframes } from "styled-components"
import Heading from "../components/atoms/Heading/Heading"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import Button from "../components/atoms/Button/Button"
import NavLink from "../components/atoms/NavLink/NavLink"
import PathfindingImg from "../assets/PathfindingVisualization.png"

const SlideIn = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${SlideIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`

const ProjectDescriptionContainer = styled.div`
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

const ProjectImage = styled.div`
  position: relative;
  height: 50%;
  width: 50%;
  background-image: url(${PathfindingImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.yellow};
    z-index: -1;
    left: 2.5%;
    top: -5%;
  }
`

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.yellow};
  margin-bottom: 3rem;
  width: 100%;
`

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  text-align: left;
  color: ${({ theme }) => theme.gray};
`

const ProjectButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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

class FourthProject extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ProjectContainer id="fourth-project-page">
        <ProjectImage />
        <ProjectDescriptionContainer>
          <ProjectDescription>
            <StyledHeading big>Sorting Visualizer App</StyledHeading>
            <StyledParagraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam id odit unde quasi molestiae rerum. Voluptatibus
              veritatis saepe quae beatae facilis, in natus nam laborum eum
              autem neque impedit sapiente odio soluta repellat, doloribus
              suscipit voluptates aliquid.
            </StyledParagraph>
            <ProjectButtons>
              <StyledButton>Preview</StyledButton>
              <StyledNavLink>GitHub Code</StyledNavLink>
            </ProjectButtons>
          </ProjectDescription>
        </ProjectDescriptionContainer>
      </ProjectContainer>
    )
  }
}

export default FourthProject
