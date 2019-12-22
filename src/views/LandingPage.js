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
    animation: ${ScaleBox} 1.3s cubic-bezier(0.34, 0.615, 0.4, 0.985) both;
  }
`

const LandingHeading = styled(Heading)`
  font-size: 16rem;
  width: 55rem;
  line-height: 14rem;
  transform: translate3d(0px, 0%, 0px);

  &:nth-last-of-type() {
    color: ${({ theme }) => theme.yellow};
  }

  span {
    margin-left: 1rem;
    border-right: 0.05em solid;
    animation: ${Caret} 1s steps(1) infinite;
  }
`

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.dataText = ["Hello World!"]
    this.state = {}
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.StartTextAnimation(0, this.dataText)
    }, 1000)
  }

  typeWriter = (text, i, fnCallback) => {
    if (i < text.length) {
      document.getElementById("text-typing").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>'

      setTimeout(() => {
        this.typeWriter(text, i + 1, fnCallback)
      }, 150)
    }
  }

  StartTextAnimation = i => {
    if (typeof this.dataText[i] == "undefined") {
      setTimeout(() => {
        this.StartTextAnimation(0)
      }, 20000)
    }
    if (i < this.dataText[i].length) {
      this.typeWriter(this.dataText[i], 0, () => {
        this.StartTextAnimation(i + 1)
      })
    }
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
