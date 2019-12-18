import React from "react"
import styled, { keyframes } from "styled-components"
import Heading from "../components/atoms/Heading/Heading"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import Button from "../components/atoms/Button/Button"
import SortingImg from "../assets/sorting.png"

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

const ProjectDescription = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ProjectImage = styled.div`
  position: relative;
  height: 50%;
  width: 50%;
  background-image: url(${SortingImg});
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
    right: 2.5%;
    top: 5%;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
`

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.yellow};
  margin-bottom: 3rem;
`

const StyledParagraph = styled(Paragraph)`
  width: 50%;
  text-align: center;
  color: ${({ theme }) => theme.gray};
`

const StyledButton = styled(Button)`
  margin: 3rem 2rem 0 2rem;
`

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ProjectContainer id="first-project-page">
        <ProjectDescription>
          <StyledHeading big>Sorting Visualizer App</StyledHeading>
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            id odit unde quasi molestiae rerum. Voluptatibus veritatis saepe
            quae beatae facilis, in natus nam laborum eum autem neque impedit
            sapiente odio soluta repellat, doloribus suscipit voluptates
            aliquid.
          </StyledParagraph>
          <ButtonsContainer>
            <StyledButton>Preview</StyledButton>
            <StyledButton>Code</StyledButton>
          </ButtonsContainer>
        </ProjectDescription>
        <ProjectImage />
      </ProjectContainer>
    )
  }
}

export default LandingPage
