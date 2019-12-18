import React, { Component } from "react"
import styled from "styled-components"
import LandingPage from "../../../views/LandingPage"
import FirstProject from "../../../views/FirstProject"
import About from "../../../views/About"
import Contact from "../../../views/Contact"

const ContentContainer = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 75%;
  width: 80%;
  overflow-y: scroll;
  overflow-x: hidden;

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
    this.state = {}
  }

  render() {
    return (
      <ContentContainer
        onScroll={this.props.scrollEventHandler}
        id="content-container"
      >
        <LandingPage />
        <FirstProject />
        <About />
        <Contact />
      </ContentContainer>
    )
  }
}

export default ContentWindow
