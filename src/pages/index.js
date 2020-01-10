import React from "react"
import styled from "styled-components"
import MainTemplate from "../template/MainTemplate"
import Header from "../components/organisms/Header/Header"
import LeftSideBar from "../components/molecules/LeftSideBar/LeftSideBar"
import RightSideBar from "../components/molecules/RightSideBar/RightSideBar"
import Footer from "../components/molecules/Footer/Footer"
import ContentWindow from "../components/organisms/ContentWindow/ContentWindow"
import MobileMenu from "../views/MobileMenu"

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  scrollbar-color: rgba(0, 0, 0, 0);

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
  }
`

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.activeDot = 0
    this.currentScrollHeight = 0
    this.appRef = React.createRef()
    this.rightSideBar = React.createRef()
    this.headerRef = React.createRef()
    this.leftBar = React.createRef()
    this.bottomLine = React.createRef()
    this.state = { componentHeight: 0, hamburgerIsOpen: false }
  }

  componentDidMount() {
    const COMPONENT_HEIGHT = document.getElementById("app-container")
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
    // Landing page
    if (scrollHeight > 0 && scrollHeight < contentSize) {
      this.activeDot = 0
      this.changeActiveNavLinkStyle(0)
      this.changeActiveDotStyle(this.activeDot)
    }
    // First project
    else if (scrollHeight >= contentSize && scrollHeight < contentSize * 2) {
      this.activeDot = 1
      this.changeActiveDotStyle(this.activeDot)
      this.changeActiveNavLinkStyle(1)
    }
    // Second Project
    else if (
      scrollHeight >= contentSize * 2 &&
      scrollHeight < contentSize * 3
    ) {
      this.activeDot = 2
      this.changeActiveDotStyle(this.activeDot)
      this.changeActiveNavLinkStyle(1)
    }
    // Third Project
    else if (
      scrollHeight >= contentSize * 3 &&
      scrollHeight < contentSize * 4
    ) {
      this.activeDot = 3
      this.changeActiveDotStyle(this.activeDot)
      this.changeActiveNavLinkStyle(1)
    }
    // Fourth Project
    else if (
      scrollHeight >= contentSize * 4 &&
      scrollHeight < contentSize * 5
    ) {
      this.activeDot = 4
      this.changeActiveDotStyle(this.activeDot)
      this.changeActiveNavLinkStyle(1)
    }
    // About Me
    else if (
      scrollHeight >= contentSize * 5 &&
      scrollHeight < contentSize * 5.7
    ) {
      this.activeDot = 5
      this.changeActiveDotStyle(this.activeDot)
      this.changeActiveNavLinkStyle(2)
    }
    // Contact
    else if (scrollHeight >= contentSize * 5.7) {
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

  scrollTo = element => {
    document.getElementById("app-container").scroll({
      top: document.getElementById(element).offsetTop,
      left: 0,
      behavior: "smooth",
    })
  }

  handleHamburgerOpening = () => {
    this.setState({ hamburgerIsOpen: !this.state.hamburgerIsOpen })
  }

  render() {
    return (
      <MainTemplate>
        <AppContainer
          id="app-container"
          onScroll={this.scrollEventHandler}
          ref={this.appRef}
        >
          <Header
            ref={this.headerRef}
            handleHamburgerOpening={this.handleHamburgerOpening}
            hamburgerIsOpen={this.state.hamburgerIsOpen}
            scrollTo={this.scrollTo}
          />
          <LeftSideBar ref={this.leftBar} />
          <ContentWindow leftBar={this.leftBar} bottomLine={this.bottomLine} />
          <RightSideBar ref={this.rightSideBar} />
          <Footer ref={this.bottomLine} />
          <MobileMenu
            hamburgerIsOpen={this.state.hamburgerIsOpen}
            scrollTo={this.scrollTo}
          />
        </AppContainer>
      </MainTemplate>
    )
  }
}

export default IndexPage
