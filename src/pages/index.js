import React from "react"
import styled from "styled-components"
import MainTemplate from "../template/MainTemplate"
import Header from "../components/organisms/Header/Header"
import LeftSideBar from "../components/molecules/LeftSideBar/LeftSideBar"
import RightSideBar from "../components/molecules/RightSideBar/RightSideBar"
import Footer from "../components/molecules/Footer/Footer"
import ContentWindow from "../components/organisms/ContentWindow/ContentWindow"

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainContainer = styled.section`
  position: relative;
  width: 87.5vw;
  height: 90vh;
  display: flex;
  justify-content: center;
`

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.activeDot = 0
    this.currentScrollHeight = 0
    this.rightSideBar = React.createRef()
    this.headerRef = React.createRef()
    this.state = { componentHeight: 0, componentChildsNumber: 0 }
  }

  componentDidMount() {
    const COMPONENT_HEIGHT = document.getElementById("content-container")
      .clientHeight

    this.setState({ componentHeight: COMPONENT_HEIGHT })
  }

  scrollEventHandler = e => {
    this.currentScrollHeight = e.target.scrollTop
    this.handleChangingActivePage(
      this.currentScrollHeight,
      this.state.componentHeight
    )
  }

  handleChangingActivePage = (scrollHeight, contentSize) => {
    if (scrollHeight > 0 && scrollHeight < contentSize) {
      this.activeDot = 0
      this.changeActiveNavLinkStyle(0)
      this.changeActiveDotStyle(this.activeDot)
    } else if (scrollHeight >= contentSize && scrollHeight < contentSize * 2) {
      this.activeDot = 1
      this.changeActiveDotStyle(this.activeDot)
      this.changeActiveNavLinkStyle(1)
    } else if (
      scrollHeight > contentSize * 2 &&
      scrollHeight < contentSize * 3
    ) {
      this.activeDot = 2
      this.changeActiveDotStyle(this.activeDot)
      this.changeActiveNavLinkStyle(1)
    } else if (
      scrollHeight > contentSize * 3 &&
      scrollHeight < contentSize * 4
    ) {
      this.activeDot = 3
      this.changeActiveDotStyle(this.activeDot)
      this.changeActiveNavLinkStyle(1)
    } else if (
      scrollHeight > contentSize * 4 &&
      scrollHeight < contentSize * 5
    ) {
      this.activeDot = 4
      this.changeActiveDotStyle(this.activeDot)
      this.changeActiveNavLinkStyle(1)
    } else if (
      scrollHeight > contentSize * 5 &&
      scrollHeight < contentSize * 6 - 5
    ) {
      this.activeDot = 5
      this.changeActiveDotStyle(this.activeDot)
      this.changeActiveNavLinkStyle(2)
    } else if (scrollHeight >= contentSize * 6 - 5) {
      this.activeDot = 6
      this.changeActiveDotStyle(this.activeDot)
      this.changeActiveNavLinkStyle(3)
    }
  }

  changeActiveDotStyle = index => {
    this.rightSideBar.current.dotsNode.current.childNodes.forEach(
      el => (el.style.cssText = "background: #a6a6a6; transform: initial")
    )

    this.rightSideBar.current.dotsNode.current.childNodes[index].style.cssText =
      "background: #F2C218; transform: scale(1.5)"
  }

  changeActiveNavLinkStyle = index => {
    this.headerRef.current.navLinksRef.current.childNodes.forEach(
      el => (el.style.color = "#a6a6a6")
    )
    this.headerRef.current.navLinksRef.current.childNodes[index].style.color =
      "#F2C218"
  }

  render() {
    return (
      <MainTemplate>
        <AppContainer id="app-container">
          <MainContainer>
            <Header ref={this.headerRef} />
            <LeftSideBar />
            <ContentWindow scrollEventHandler={this.scrollEventHandler} />
            <RightSideBar ref={this.rightSideBar} />
            <Footer />
          </MainContainer>
        </AppContainer>
      </MainTemplate>
    )
  }
}

export default IndexPage
