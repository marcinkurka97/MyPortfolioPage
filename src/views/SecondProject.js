import React from "react"
import styled, { keyframes, css } from "styled-components"
import Heading from "../components/atoms/Heading/Heading"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import Button from "../components/atoms/Button/Button"
import NavLink from "../components/atoms/NavLink/NavLink"
import HomePingImg from "../assets/HomePin.png"
import media from "../theme/media"

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
    filter: blur(3px);
    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBox} 1.5s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
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

  ${media.tablet`
    width: 60%;
    height: auto;
  `}

  ${media.phone`
    width: 80%;
    height: auto;
  `}
`

const StyledHeading = styled(Heading)`
  font-size: 6rem;
  color: ${({ theme }) => theme.yellow};
  opacity: 0;
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

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  opacity: 0;
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

const StyledListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 0.5s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
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
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 0.5s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};
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
      <ProjectContainer active={activeTab} id="second-project-page">
        <ProjectDescription>
          <StyledHeading active={activeTab} big>
            HousePin
          </StyledHeading>
          <StyledParagraph active={activeTab}>
            That's my diploma work. It's gathering data from polish real estate
            sites like OLX and otodom and then placing each offer on map. The
            idea is to give users better understanding of potential house
            location and neighborhood. Users can filter offers by price, type or
            even distance from given point.
            <br />
            <br />
          </StyledParagraph>
          <StyledListContainer active={activeTab}>
            Technologies used:
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Jest </li>
              <li>Google APIs</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>REST API</li>
            </ul>
          </StyledListContainer>
          <ProjectButtons active={activeTab}>
            <StyledButton>Preview</StyledButton>
            <StyledNavLink>GitHub Code</StyledNavLink>
          </ProjectButtons>
        </ProjectDescription>
      </ProjectContainer>
    )
  }
}

export default SecondProject
