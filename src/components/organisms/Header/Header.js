import React from "react"
import styled from "styled-components"
import Heading from "../../atoms/Heading/Heading"
import Paragraph from "../../atoms/Paragraph/Paragraph"
import NavLink from "../../atoms/NavLink/NavLink"

const HeaderContainer = styled.header`
  padding: 0 7.5rem;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.gray};
`

const NavLinksContainer = styled.div`
  a {
    margin-left: 20px;
  }
`

const Header = () => (
  <HeaderContainer>
    <Heading big>MyLogo</Heading>
    <StyledParagraph>I like programing</StyledParagraph>
    <NavLinksContainer>
      <NavLink>Projects.</NavLink>
      <NavLink>About.</NavLink>
      <NavLink>Contact.</NavLink>
    </NavLinksContainer>
  </HeaderContainer>
)

export default Header
