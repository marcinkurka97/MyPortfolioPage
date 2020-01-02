import React, { Component } from "react"
import styled from "styled-components"
import LandingPage from "../../../views/LandingPage"
import FirstProject from "../../../views/FirstProject"
import SecondProject from "../../../views/SecondProject"
import ThirdProject from "../../../views/ThirdProject"
import FourthProject from "../../../views/FourthProject"
import About from "../../../views/About"
import Footer from "../../../views/Footer"

const ContentContainer = styled.section`
  width: 100%;
`

class ContentWindow extends Component {
  constructor(props) {
    super(props)
    this.state = { currentScrollHeight: 0 }
  }

  componentDidMount() {
    document
      .getElementById("app-container")
      .addEventListener("scroll", this.handleScroll)

    const COMPONENT_HEIGHT = document.getElementById("app-container")
      .clientHeight

    this.setState({ componentHeight: COMPONENT_HEIGHT })
  }

  componentWillUnmount() {
    document
      .getElementById("app-container")
      .removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = e => {
    this.setState({ currentScrollHeight: e.target.scrollTop })
  }

  render() {
    return (
      <ContentContainer id="content-container">
        <LandingPage />
        <FirstProject
          active={
            this.state.currentScrollHeight >= this.state.componentHeight / 2
              ? true
              : false
          }
        />
        <SecondProject
          active={
            this.state.currentScrollHeight >=
            (this.state.componentHeight * 2) / 1.1
              ? true
              : false
          }
        />
        <ThirdProject
          active={
            this.state.currentScrollHeight >=
            (this.state.componentHeight * 3) / 1.1
              ? true
              : false
          }
        />
        <FourthProject
          active={
            this.state.currentScrollHeight >=
            (this.state.componentHeight * 4) / 1.1
              ? true
              : false
          }
        />
        <About
          active={
            this.state.currentScrollHeight >=
            (this.state.componentHeight * 5) / 1.1
              ? true
              : false
          }
        />
        <Footer
          active={
            this.state.currentScrollHeight >=
            (this.state.componentHeight * 6) / 1.1
              ? true
              : false
          }
        />
      </ContentContainer>
    )
  }
}

export default ContentWindow
