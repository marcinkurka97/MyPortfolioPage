import React from "react"
import styled from "styled-components"
import MainTemplate from "../template/MainTemplate"
import Header from "../components/organisms/Header/Header"
import LeftSideBar from "../components/molecules/LeftSideBar/LeftSideBar"
import RightSideBar from "../components/molecules/RightSideBar/RightSideBar"
import Footer from "../components/molecules/Footer/Footer"
import ContentWindow from "../components/organisms/ContentWindow/ContentWindow"

const MainContainer = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 87.5vw;
  height: 90vh;
  margin: auto auto;
`

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.activeDot = 1
    this.state = { componentHeight: 0, componentChildsNumber: 0 }
  }

  componentDidMount() {
    const COMPONENT_HEIGHT = document.getElementById("content-container")
      .scrollHeight
    const COMPONENT_CHILDS = document.getElementById("content-container")
      .childNodes.length

    this.setState({ componentHeight: COMPONENT_HEIGHT })
    this.setState({ componentChildsNumber: COMPONENT_CHILDS })
  }

  scrollEventHandler = e => {
    let scrollHeight = e.target.scrollTop

    const contentSize =
      this.state.componentHeight / this.state.componentChildsNumber

    if (scrollHeight > 0 && scrollHeight < contentSize) {
      this.activeDot = 1
    } else if (scrollHeight > contentSize && scrollHeight < contentSize * 2) {
      this.activeDot = 2
    } else if (
      scrollHeight > contentSize * 2 &&
      scrollHeight < contentSize * 3
    ) {
      this.activeDot = 3
    } else if (
      scrollHeight > contentSize * 3 &&
      scrollHeight < contentSize * 4
    ) {
      this.activeDot = 4
    }
  }

  render() {
    return (
      <MainTemplate>
        <MainContainer>
          <Header />
          <LeftSideBar />
          <ContentWindow scrollEventHandler={this.scrollEventHandler} />
          <RightSideBar activeDot={this.activeDot} />
          <Footer />
        </MainContainer>
      </MainTemplate>
    )
  }
}

export default IndexPage
