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

const IndexPage = () => (
  <MainTemplate>
    <MainContainer>
      <Header />
      <LeftSideBar />
      <ContentWindow>hello</ContentWindow>
      <RightSideBar />
      <Footer />
    </MainContainer>
  </MainTemplate>
)

export default IndexPage
