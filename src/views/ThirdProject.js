import React from "react"
import styled, { keyframes, css } from "styled-components"
import Heading from "../components/atoms/Heading/Heading"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import Button from "../components/atoms/Button/Button"
import NavLink from "../components/atoms/NavLink/NavLink"
import PathfindingImg from "../assets/PathfindingVisualization.png"
import ContentTemplate from "../template/ContentTemplate"
import media from "../theme/media"

const ScaleBox = keyframes`
  0% {
    min-height: 0%;
    opacity: 1;
  }
  100% {
    min-height: 100%;
    opacity: 1;
  }
`
const ScaleBoxAfter = keyframes`
  0% {
    min-height: 0%;
    opacity: 1;
  }
  60% {
    transform: translate(0, 0);
    min-height: 100%;
    opacity: 1;
  }
  100% {
    transform: translate(2.5%, 5%);
    opacity: 1;
    min-height: 100%;
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

const ProjectDescriptionContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.phone`
    width: 100%;
    height: auto;
  `}
`

const ProjectDescription = styled.div`
  width: 70%;
  height: auto;
`

const ProjectImage = styled.div`
  position: relative;
  height: 40%;
  width: 50%;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    min-height: 100%;
    z-index: 1;
    opacity: 0;
    background: ${({ theme }) => theme.yellow};
    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBoxAfter} 2s cubic-bezier(.34,.615,.4,.985) both
      `};
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    min-height: 100%;
    z-index: 1;
    opacity: 0;
    background-image: url(${PathfindingImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBox} 1s 0.25s cubic-bezier(.34,.615,.4,.985) both
      `};
  }

  ${media.phone`
    height: 30%;
    width: 90%;
    margin-bottom: 3rem;
  `}
`

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.yellow};
  margin-bottom: 3rem;
  text-align: center;
  width: 100%;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.phone`
    font-size: ${({ theme }) => theme.fontSize.m};
    text-align: center;
    margin-bottom: 1rem;
  `}
`

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  text-align: left;
  color: ${({ theme }) => theme.gray};
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 0.25s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.phone`
    font-size: 1.4rem;
  `}
`

const ListContainer = styled.div`
  color: ${({ theme }) => theme.gray};
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 0.5s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};
  opacity: 0;

  ${media.phone`
    font-size: 1.4rem;
  `}
`

const StyledList = styled.ul`
  color: ${({ theme }) => theme.gray};
`

const ProjectButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 0.75s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};
`

const StyledNavLink = styled(NavLink)`
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  font-size: ${({ theme }) => theme.fontSize.s};

  &:hover {
    transform: initial;
    border-bottom: 1px solid ${({ theme }) => theme.yellow};
  }

  ${media.phone`
    font-size: ${({ theme }) => theme.fontSize.xs};
  `}
`

const StyledButton = styled(Button)`
  margin: 3rem 0;

  ${media.phone`
    margin: 1rem 0;
  `}
`

class ThirdProject extends React.Component {
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
      <ContentTemplate id="third-project-page">
        <ProjectImage active={activeTab} />
        <ProjectDescriptionContainer>
          <ProjectDescription>
            <StyledHeading big active={activeTab}>
              Pathfinding and Maze Generation App
            </StyledHeading>
            <StyledParagraph active={activeTab}>
              React app visualizing building mazes and then finding the best
              path between two given points.
              <br />
              <br />
            </StyledParagraph>
            <ListContainer active={activeTab}>
              Maze generation algorithms:
              <StyledList>
                <li>Recursive Division</li>
                <li>Recursive Backtracking</li>
              </StyledList>
              Pathfinding algorithms:
              <StyledList>
                <li>Dijkstra Algorithm</li>
              </StyledList>
            </ListContainer>
            <ProjectButtons active={activeTab}>
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://patinos123.github.io/pathfinding-app/"
              >
                <StyledButton>Preview</StyledButton>
              </a>

              <StyledNavLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/patinos123/pathfinding-app"
              >
                GitHub Code
              </StyledNavLink>
            </ProjectButtons>
          </ProjectDescription>
        </ProjectDescriptionContainer>
      </ContentTemplate>
    )
  }
}

export default ThirdProject
