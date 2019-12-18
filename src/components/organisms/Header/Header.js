import React from "react"
import styled from "styled-components"
import Heading from "../../atoms/Heading/Heading"
import Paragraph from "../../atoms/Paragraph/Paragraph"
import NavLink from "../../atoms/NavLink/NavLink"

const StyledHeading = styled(Heading)`
  flex: 20% 0 0;
`

const HeaderContainer = styled.header`
  position: relative;
  padding: 0 7.5rem;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.gray};
  font-size: ${({ theme }) => theme.fontSize.s};
`

const NavLinksContainer = styled.div`
  position: absolute;
  right: 7.5rem;
  height: 100%;
  display: flex;
  align-items: center;

  a {
    margin: 0 2.5rem;

    &:first-of-type {
      color: ${({ theme }) => theme.yellow};
    }

    span {
      vertical-align: super;
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`

const Header = () => {
  const scrollTo = element => {
    document.getElementById("content-container").scroll({
      top: document.getElementById(element).offsetTop,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <HeaderContainer>
      <StyledHeading big>MyLogo</StyledHeading>
      <StyledParagraph>I like programing</StyledParagraph>
      <NavLinksContainer>
        <NavLink onClick={() => scrollTo("landing-page")}>
          Home. <span>1</span>
        </NavLink>
        <NavLink onClick={() => scrollTo("first-project-page")}>
          Projects. <span>2</span>
        </NavLink>
        <NavLink onClick={() => scrollTo("about-page")}>
          About. <span>3</span>
        </NavLink>
        <NavLink onClick={() => scrollTo("contact-page")}>
          Contact. <span>4</span>
        </NavLink>
      </NavLinksContainer>
    </HeaderContainer>
  )
}
export default Header
