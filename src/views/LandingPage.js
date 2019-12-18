import React from "react"
import styled, { keyframes } from "styled-components"
import Heading from "../components/atoms/Heading/Heading"

const ScaleBox = keyframes`
  0% {
    min-width: 0%;
  }
  100% {
    min-width: 50%;
  }
`

const Caret = keyframes`
  50% {
    border-color: transparent;
  }
`

const LandingPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    min-width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.yellow};
    z-index: -1;
    animation: ${ScaleBox} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`

const LandingHeading = styled(Heading)`
  font-size: 16rem;
  width: 55rem;
  line-height: 14rem;
  transform: translate3d(0px, 0%, 0px);

  &::last-child {
    color: ${({ theme }) => theme.yellow};
  }

  span {
    margin-left: 1rem;
    border-right: 0.05em solid;
    animation: ${Caret} 1s steps(1) infinite;
  }
`

const dataText = ["Hello World!"]

const typeWriter = (text, i, fnCallback) => {
  if (i < text.length) {
    document.getElementById("text-typing").innerHTML =
      text.substring(0, i + 1) + '<span aria-hidden="true"></span>'

    setTimeout(function() {
      typeWriter(text, i + 1, fnCallback)
    }, 150)
  }
}

const StartTextAnimation = i => {
  if (typeof dataText[i] == "undefined") {
    setTimeout(function() {
      StartTextAnimation(0)
    }, 20000)
  }
  if (i < dataText[i].length) {
    typeWriter(dataText[i], 0, function() {
      StartTextAnimation(i + 1)
    })
  }
}

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    setTimeout(function() {
      StartTextAnimation(0, dataText)
    }, 850)
  }

  render() {
    return (
      <LandingPageContainer id="landing-page">
        <LandingHeading id="text-typing"></LandingHeading>
      </LandingPageContainer>
    )
  }
}

export default LandingPage
