import React from "react"
import styled, { keyframes } from "styled-components"
import Heading from "../components/atoms/Heading/Heading"
import media from "../theme/media"

const ScaleBox = keyframes`
  0% {
    min-width: 0%;
  }
  100% {
    min-width: 50%;
  }
`

const ScaleBoxMobile = keyframes`
  0% {
    min-height: 0%;
  }
  100% {
    min-height: 50%;
  }
`

const Caret = keyframes`
  50% {
    border-color: transparent;
  }
`

const LandingPageContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LandingPageBox = styled.div`
  position: relative;
  width: 60%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1601px) {
    &:before {
      content: "";
      position: absolute;
      left: 0;
      min-width: 50%;
      height: 100%;
      z-index: -1;
      background-color: ${({ theme }) => theme.yellow};
      animation: ${ScaleBox} 1.3s cubic-bezier(0.34, 0.615, 0.4, 0.985) both;
    }
  }

  ${media.phone`
    width: calc(100% - 6rem);
    height: 70%;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      width: 100%;
      min-height: 50%;
      z-index: -1;
      background-color: ${({ theme }) => theme.yellow};
      animation: ${ScaleBoxMobile} 1.3s cubic-bezier(0.34, 0.615, 0.4, 0.985) both;
    }
  `}
`

const LandingHeading = styled(Heading)`
  font-size: 16rem;
  width: 50rem;
  line-height: 14rem;
  transform: translate3d(0px, 0%, 0px);

  .caret {
    margin-left: 1rem;
    border-right: 0.05em solid;
    animation: ${Caret} 1s steps(1) infinite;
  }

  .exclamationMark {
    color: ${({ theme }) => theme.yellow};
  }

  ${media.phone`
      font-size: 8rem;
      line-height: 8rem;
      width: 85%;
      height: 16rem;
  `}
`

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.dataText = "Hello World"
    this.state = {}
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.typeWriter(this.dataText, 0)
    }, 1000)
  }

  typeWriter = (text, i, fnCallback) => {
    if (i < text.length) {
      if (i === text.length - 1) {
        document.getElementById("text-typing").innerHTML =
          text.substring(0, i + 1) +
          "<span class='exclamationMark'>!</span>" +
          '<span aria-hidden="true" class="caret"></span>'
      } else {
        document.getElementById("text-typing").innerHTML =
          text.substring(0, i + 1) +
          '<span aria-hidden="true" class="caret"></span>'
      }

      setTimeout(() => {
        this.typeWriter(text, i + 1, fnCallback)
      }, 150)
    }
  }

  render() {
    return (
      <LandingPageContainer id="landing-page">
        <LandingPageBox>
          <LandingHeading id="text-typing"></LandingHeading>
        </LandingPageBox>
      </LandingPageContainer>
    )
  }
}

export default LandingPage
