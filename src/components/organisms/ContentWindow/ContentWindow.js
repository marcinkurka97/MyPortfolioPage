import React, { Component } from "react"
import styled from "styled-components"
import LandingPage from "../../../views/LandingPage"
import FirstProject from "../../../views/FirstProject"
import SecondProject from "../../../views/SecondProject"
import ThirdProject from "../../../views/ThirdProject"
import FourthProject from "../../../views/FourthProject"
import About from "../../../views/About"
import Contact from "../../../views/Contact"

const ContentContainer = styled.section`
  position: absolute;
  height: 75%;
  width: 80%;
  overflow-y: scroll;
  overflow-x: hidden;
  justify-self: center;
  align-self: center;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
  }
`

class ContentWindow extends Component {
  constructor(props) {
    super(props)
    this.state = { componentHeight: 0, currentScrollHeight: 0 }
  }

  componentDidMount() {
    const COMPONENT_HEIGHT = document.getElementById("content-container")
      .clientHeight

    this.setState({ componentHeight: COMPONENT_HEIGHT })
  }

  scrollEventHandler = e => {
    this.props.scrollEventHandler(e)
    this.setState({ currentScrollHeight: e.target.scrollTop })
  }

  render() {
    return (
      <ContentContainer
        onScroll={this.scrollEventHandler}
        id="content-container"
      >
        <LandingPage />
        <FirstProject
          active={
            this.state.currentScrollHeight >= this.state.componentHeight / 1.25
              ? true
              : false
          }
        />
        <SecondProject
          active={
            this.state.currentScrollHeight >=
            (this.state.componentHeight * 2) / 1.25
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
        <Contact
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
