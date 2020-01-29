import React, { useState, useEffect } from "react"
import styled, { keyframes, css } from "styled-components"
import Heading from "../components/atoms/Heading/Heading"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import Button from "../components/atoms/Button/Button"
import NavLink from "../components/atoms/NavLink/NavLink"
import media from "../theme/media"
import ContentTemplate from "../template/ContentTemplate"
import PathfindingImg from "../assets/PathfindingVisualization.gif"

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
    transform: translate(-2.5%, 5%);
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

const StyledHeading = styled(Heading)`
  width: 100%;
  opacity: 0;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.yellow};
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 0.25s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.laptop`
    font-size: 4rem;
    margin-bottom: 1rem;
  `}

  ${media.tablet`
    font-size: 5rem;
  `}

  ${media.phone`
    font-size: 2.8rem;
    text-align: left;
    padding: 0 0 1rem 0;
    width: calc(100% - 6rem);
    margin: 0;
  `}
`

const DescriptionContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;

  ${media.tablet`
    flex-direction: column;
  `}

  ${media.phone`
    flex-direction: column;
    height: auto;
    width: calc(100% - 6rem);
  `}
`

const LeftDescription = styled.div`
  width: 40%;
  height: 100%;

  ${media.tablet`
    width: 100%;
    height: auto;
  `}

  ${media.phone`
    width: 100%;
    height: auto;
  `}
`

const RightDescription = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.tablet`
    width: 100%;
    padding: 3rem 0 0 0;
  `}

  ${media.phone`
    width: 100%;
    height: auto;
    padding: 3rem 0 0 0;
  `}
`

const ProjectImage = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    min-height: 100%;
    opacity: 0;
    background: ${({ theme }) => theme.yellow};
    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBoxAfter} 2s 0.25s cubic-bezier(.34,.615,.4,.985) both
      `};
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    min-height: 100%;
    opacity: 0;
    background-image: url(${PathfindingImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBox} 1s 0.5s cubic-bezier(.34,.615,.4,.985) both
      `};
  }

  ${media.phone`
    height: 25vh;
    width: 100%;
  `}
`

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  padding: 0 0 3rem 0;
  opacity: 0;
  font-family: 'Lato', sans-serif;
  font-size: 2.4rem;
  text-align: justify;
  color: ${({ theme }) => theme.gray};
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 0.5s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.laptop`
    font-size: 2rem;
  `}

  ${media.tablet`
    font-size: 3rem;
  `}

  ${media.phone`
    width: 100%;
    height: auto;
    font-size: 1.4rem;
    padding: 0 0 1rem 0;
  `}
`

const Technologies = styled.span`
  width: 100%;
  text-align: justify;
  font-family: "Lato", sans-serif;
  color: ${({ theme }) => theme.gray};
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 0.75s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.laptop`
    font-size: 1.6rem;
  `}

  ${media.tablet`
    font-size: 3rem;
    text-align: justify;
  `}

  ${media.phone`
    width: 100%;
    font-size: 1.4rem;
    padding: 0 0 1rem 0;
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
      ${TextSlideIn} 1.3s 1s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.tablet`
    padding: 3rem 0 0 0;
  `}
`

const StyledButton = styled(Button)`
  margin: 3rem 0;
  color: ${({ theme }) => theme.gray};
`

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.gray};
  border-bottom: 1px solid ${({ theme }) => theme.gray};
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

const ThirdProject = ({ active }) => {
  const [activeTab, setActiveTab] = useState(false)

  useEffect(() => {
    if (active === true && active !== activeTab) {
      setActiveTab(active)
    }
  }, [activeTab, active])

  return (
    <ContentTemplate
      id="third-project-page"
      active={activeTab}
      type="Projects."
    >
      <StyledHeading active={activeTab} big>
        Pathfinding and Maze Generation App
      </StyledHeading>
      <DescriptionContainer>
        <LeftDescription>
          <StyledParagraph active={activeTab}>
            App visualizing building mazes and finding the best path between two
            given points. User can change start and finish position and also
            build obstacles.
          </StyledParagraph>
          <Technologies active={activeTab}>
            React - Styled Components - Recursive Division Maze Generation -
            Recursive Backtracking Maze Generation - Dijkstra's Pathfinding
            Algorithm
          </Technologies>
        </LeftDescription>
        <RightDescription>
          <ProjectImage active={activeTab} />
          <ProjectButtons active={activeTab}>
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://patinos123.github.io/pathfinding-app/"
            >
              <StyledButton>View</StyledButton>
            </a>
            <StyledNavLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/patinos123/pathfinding-app"
            >
              GitHub Code
            </StyledNavLink>
          </ProjectButtons>
        </RightDescription>
      </DescriptionContainer>
    </ContentTemplate>
  )
}

export default ThirdProject
