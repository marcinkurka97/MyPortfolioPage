import React from "react"
import styled, { keyframes, css } from "styled-components"
import Heading from "../components/atoms/Heading/Heading"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import Button from "../components/atoms/Button/Button"
import NavLink from "../components/atoms/NavLink/NavLink"
import HomePingImg from "../assets/HomePin.png"

const ScaleBox = keyframes`
  0% {
    min-height: 0%;
    opacity: 1;
  }
  100% {
    min-height: 100%;
    opacity: 0.5;
  }
`

const ProjectContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    background-image: url(${HomePingImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
    opacity: 0;
    z-index: -1;
    width: 100%;
    min-height: 100%;
    top: 0;
    filter: blur(2px);
    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBox} 1.3s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
      `};
  }
`

const ProjectDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
  height: 50%;
`

const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.yellow};
  text-shadow: 2px 2px 10px #000;
`

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  text-shadow: 2px 2px 10px #000;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
`

const ProjectButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`

const StyledButton = styled(Button)`
  margin: 3rem 0;
  color: ${({ theme }) => theme.white};
`

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.s};

  &:hover {
    transform: initial;
    border-bottom: 1px solid ${({ theme }) => theme.yellow};
  }
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
      <ProjectContainer active={activeTab} id="second-project-page">
        <ProjectDescription>
          <StyledHeading big>HousePin</StyledHeading>
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            id odit unde quasi molestiae rerum. Voluptatibus veritatis saepe
            quae beatae facilis, in natus nam laborum eum autem neque impedit
            sapiente odio soluta repellat, doloribus suscipit voluptates
            aliquid.
          </StyledParagraph>
          <ProjectButtons>
            <StyledButton>Preview</StyledButton>
            <StyledNavLink>GitHub Code</StyledNavLink>
          </ProjectButtons>
        </ProjectDescription>
      </ProjectContainer>
    )
  }
}

export default SecondProject
