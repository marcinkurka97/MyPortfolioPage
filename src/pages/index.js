import React, { useState, useEffect, useRef } from "react"
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

const IndexPage = () => {
  let activeDot = 0
  let currentScrollHeight = 0

  const appRef = useRef(null)
  const rightSideBar = useRef(null)
  const headerRef = useRef(null)
  const leftBar = useRef(null)
  const bottomLine = useRef(null)

  const [componentHeight, setComponentHeight] = useState(0)
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)

  useEffect(() => {
    const COMPONENT_HEIGHT = document.getElementById("app-container")
      .clientHeight

    setComponentHeight(COMPONENT_HEIGHT)
  }, [])

  const scrollEventHandler = e => {
    currentScrollHeight = e.target.scrollTop
    handleChangingActivePage(currentScrollHeight, componentHeight)
  }

  const handleChangingActivePage = (scrollHeight, contentSize) => {
    // Landing page
    if (scrollHeight > 0 && scrollHeight < contentSize) {
      activeDot = 0
      changeActiveNavLinkStyle(0)
      changeActiveDotStyle(activeDot)
    }
    // First project
    else if (scrollHeight >= contentSize && scrollHeight < contentSize * 2) {
      activeDot = 1
      changeActiveDotStyle(activeDot)
      changeActiveNavLinkStyle(1)
    }
    // Second Project
    else if (
      scrollHeight >= contentSize * 2 &&
      scrollHeight < contentSize * 3
    ) {
      activeDot = 2
      changeActiveDotStyle(activeDot)
      changeActiveNavLinkStyle(1)
    }
    // Third Project
    else if (
      scrollHeight >= contentSize * 3 &&
      scrollHeight < contentSize * 4
    ) {
      activeDot = 3
      changeActiveDotStyle(activeDot)
      changeActiveNavLinkStyle(1)
    }
    // Fourth Project
    else if (
      scrollHeight >= contentSize * 4 &&
      scrollHeight < contentSize * 5
    ) {
      activeDot = 4
      changeActiveDotStyle(activeDot)
      changeActiveNavLinkStyle(1)
    }
    // About Me
    else if (
      scrollHeight >= contentSize * 5 &&
      scrollHeight < contentSize * 5.7
    ) {
      activeDot = 5
      changeActiveDotStyle(activeDot)
      changeActiveNavLinkStyle(2)
    }
    // Contact
    else if (scrollHeight >= contentSize * 5.7) {
      activeDot = 6
      changeActiveDotStyle(activeDot)
      changeActiveNavLinkStyle(3)
    }
  }

  const changeActiveDotStyle = index => {
    rightSideBar.current.dotsNode.current.childNodes.forEach(
      el => (el.style.cssText = "background: #a6a6a6; transform: initial")
    )

    rightSideBar.current.dotsNode.current.childNodes[index].style.cssText =
      "background: #F2C218; transform: scale(1.5)"
  }

  const changeActiveNavLinkStyle = index => {
    headerRef.current.navLinksRef.current.childNodes.forEach(
      el => (el.style.color = "#a6a6a6")
    )
    headerRef.current.navLinksRef.current.childNodes[index].style.color =
      "#F2C218"
  }

  const scrollTo = element => {
    document.getElementById("app-container").scroll({
      top: document.getElementById(element).offsetTop,
      left: 0,
      behavior: "smooth",
    })
  }

  const handleHamburgerOpening = () => {
    setHamburgerIsOpen(!hamburgerIsOpen)
  }

  return (
    <MainTemplate>
      <AppContainer
        id="app-container"
        onScroll={scrollEventHandler}
        ref={appRef}
      >
        <Header
          ref={headerRef}
          handleHamburgerOpening={handleHamburgerOpening}
          hamburgerIsOpen={hamburgerIsOpen}
          scrollTo={scrollTo}
        />
        <LeftSideBar ref={leftBar} />
        <ContentWindow leftBar={leftBar} bottomLine={bottomLine} />
        <RightSideBar ref={rightSideBar} />
        <Footer ref={bottomLine} />
        <MobileMenu hamburgerIsOpen={hamburgerIsOpen} scrollTo={scrollTo} />
      </AppContainer>
    </MainTemplate>
  )
}

export default IndexPage
