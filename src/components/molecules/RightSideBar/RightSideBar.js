import React from "react"
import styled, { keyframes } from "styled-components"
import media from "../../../theme/media"

const RevealDot1 = keyframes`
  0% {
    transform: translateY(8.1rem)
  }

  100% {
    transform: translateY(0);
  }
`

const RevealDot2 = keyframes`
  0% {
    transform: translateY(5.4rem)
  }

  100% {
    transform: translateY(0);
  }
`

const RevealDot3 = keyframes`
  0% {
    transform: translateY(2.7rem)
  }

  100% {
    transform: translateY(0);
  }
`

const RevealDot5 = keyframes`
  0% {
    transform: translateY(-2.7rem)
  }

  100% {
    transform: translateY(0);
  }
`

const RevealDot6 = keyframes`
  0% {
    transform: translateY(-5.4rem)
  }

  100% {
    transform: translateY(0);
  }
`

const RevealDot7 = keyframes`
  0% {
    transform: translateY(-8.1rem)
  }

  100% {
    transform: translateY(0);
  }
`

const SideBarContainer = styled.div`
  position: fixed;
  right: 6.25vw;
  height: calc(100% - 50px);
  width: ${({ theme }) => theme.fontSize.s};
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.phone`
    display: none;
  `}
`

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: ${({ theme }) => theme.fontSize.s};
`

const ProgressDot = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  margin: 0.75rem 0;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.gray};
  transition: background, transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid ${({ theme }) => theme.black};

  &:first-of-type {
    animation: ${RevealDot1} 1.3s 0.15s cubic-bezier(0.34, 0.615, 0.4, 0.985)
      backwards;
    background-color: ${({ theme }) => theme.yellow};
    transform: scale(1.5);
  }

  &:nth-of-type(2) {
    animation: ${RevealDot2} 1.3s 0.45s cubic-bezier(0.34, 0.615, 0.4, 0.985)
      backwards;
  }

  &:nth-of-type(3) {
    animation: ${RevealDot3} 1.3s 0.65s cubic-bezier(0.34, 0.615, 0.4, 0.985)
      backwards;
  }

  &:nth-of-type(5) {
    animation: ${RevealDot5} 1.3s 0.65s cubic-bezier(0.34, 0.615, 0.4, 0.985)
      backwards;
  }

  &:nth-of-type(6) {
    animation: ${RevealDot6} 1.3s 0.45s cubic-bezier(0.34, 0.615, 0.4, 0.985)
      backwards;
  }

  &:last-of-type {
    animation: ${RevealDot7} 1.3s 0.15s cubic-bezier(0.34, 0.615, 0.4, 0.985)
      backwards;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.25) !important;
    background: ${({ theme }) => theme.yellow} !important;
  }

  ${media.tablet`
    width: 2rem;
    height: 2rem;
  `}
`

class RightSideBar extends React.Component {
  constructor(props) {
    super(props)
    this.dotsNode = React.createRef()
    this.state = {}
  }

  scrollTo = element => {
    document.getElementById("app-container").scroll({
      top: document.getElementById(element).offsetTop,
      left: 0,
      behavior: "smooth",
    })
  }

  render() {
    return (
      <SideBarContainer>
        <ProgressBarContainer id="progress-bar" ref={this.dotsNode}>
          <ProgressDot onClick={() => this.scrollTo("landing-page")} />
          <ProgressDot onClick={() => this.scrollTo("first-project-page")} />
          <ProgressDot onClick={() => this.scrollTo("second-project-page")} />
          <ProgressDot onClick={() => this.scrollTo("third-project-page")} />
          <ProgressDot onClick={() => this.scrollTo("fourth-project-page")} />
          <ProgressDot onClick={() => this.scrollTo("about-page")} />
          <ProgressDot onClick={() => this.scrollTo("footer-page")} />
        </ProgressBarContainer>
      </SideBarContainer>
    )
  }
}

export default RightSideBar
