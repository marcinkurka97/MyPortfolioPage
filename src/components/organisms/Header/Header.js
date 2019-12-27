import React from "react"
import styled, { keyframes } from "styled-components"
import Heading from "../../atoms/Heading/Heading"
import Paragraph from "../../atoms/Paragraph/Paragraph"
import NavLink from "../../atoms/NavLink/NavLink"

const MoveIn = keyframes`
  0% {
    transform: translateX(5rem);
  }
  100% {
    transform: translateX(0);
  }
`

const StyledHeading = styled(Heading)`
  flex: 20% 0 0;
`

const HeaderContainer = styled.header`
  position: fixed;
  padding: 0 7.5rem;
  top: 5vh;
  width: 87.5%;
  height: 50px;
  display: flex;
  align-items: center;
  z-index: 10;
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
    animation: ${MoveIn} 1.3s cubic-bezier(0.34, 0.615, 0.4, 0.985);

    &:first-of-type {
      color: ${({ theme }) => theme.yellow};
    }

    span {
      vertical-align: super;
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.navLinksRef = React.createRef()
    this.state = {}
  }

  scrollTo = element => {
    document.getElementById("app-container").scroll({
      top: document.getElementById(element).offsetTop,
      left: 0,
      behavior: "smooth",
    })
  }

  render() {
    return (
      <HeaderContainer>
        <StyledHeading big>MyLogo</StyledHeading>
        <StyledParagraph>Marcin Kurka Portfolio</StyledParagraph>
        <NavLinksContainer id="nav-links" ref={this.navLinksRef}>
          <NavLink onClick={() => this.scrollTo("landing-page")}>
            Home. <span>1</span>
          </NavLink>
          <NavLink onClick={() => this.scrollTo("first-project-page")}>
            Projects. <span>2</span>
          </NavLink>
          <NavLink onClick={() => this.scrollTo("about-page")}>
            About. <span>3</span>
          </NavLink>
          <NavLink onClick={() => this.scrollTo("contact-page")}>
            Contact. <span>4</span>
          </NavLink>
        </NavLinksContainer>
      </HeaderContainer>
    )
  }
}

export default Header
