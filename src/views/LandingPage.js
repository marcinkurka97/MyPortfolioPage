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
  width: 70%;
  height: 70%;
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

  ${media.phone`
    width: 90%;
    height: 50%;
  `}
`

const LandingHeading = styled(Heading)`
  font-size: 16rem;
  width: 55rem;
  line-height: 14rem;
  transform: translate3d(0px, 0%, 0px);

  span {
    margin-left: 1rem;
    border-right: 0.05em solid;
    animation: ${Caret} 1s steps(1) infinite;
  }

  ${media.phone`
      font-size: 7rem;
      line-height: 5.5rem;
      width: 75%;
  `}
`

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.dataText = ["Hello World!"]
    this.state = {}
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.typeWriter(this.dataText[0], 0)
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
