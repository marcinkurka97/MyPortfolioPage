import React from "react"
import styled, { keyframes } from "styled-components"
import Paragraph from "../../atoms/Paragraph/Paragraph"
import NavLink from "../../atoms/NavLink/NavLink"
import Logo from "../../../assets/logo.svg"
import media from "../../../theme/media"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"

const MoveIn = keyframes`
  0% {
    transform: translateX(5rem);
  }
  100% {
    transform: translateX(0);
  }
`

const StyledLogo = styled.div`
  flex: 20% 0 0;
  width: 100%;
  height: 100%;
  background: url(${Logo});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  z-index: 15;

  ${media.tablet`
    flex: 40% 0 0;
    height: 100px;
  `}

  ${media.phone`
    flex: 50% 0 0;
    height: 100%;
  `}
`

const HeaderContainer = styled.header`
  position: fixed;
  padding: 0 7.5rem;
  top: 5vh;
  width: 87.5%;
  height: 60px;
  display: flex;
  align-items: center;
  z-index: 10;

  ${media.phone`
    padding: 0;
    top: 3vh;
    width: 90%;
    justify-content: space-between;
  `}

  ${media.tablet`
    padding: 0;
    top: 3vh;
    width: 85%;
    justify-content: space-between;
  `}
`

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.gray};
  font-size: ${({ theme }) => theme.fontSize.s};

  ${media.tablet`
    display: none;
  `}
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

  ${media.tablet`
    display: none;
  `}
`

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.navLinksRef = React.createRef()
    this.state = {}
  }

  render() {
    return (
      <HeaderContainer>
        <StyledLogo onClick={() => this.props.scrollTo("landing-page")} />
        <StyledParagraph>Marcin Kurka Portfolio</StyledParagraph>
        <NavLinksContainer id="nav-links" ref={this.navLinksRef}>
          <NavLink onClick={() => this.props.scrollTo("landing-page")}>
            Home. <span>1</span>
          </NavLink>
          <NavLink onClick={() => this.props.scrollTo("first-project-page")}>
            Projects. <span>2</span>
          </NavLink>
          <NavLink onClick={() => this.props.scrollTo("about-page")}>
            About. <span>3</span>
          </NavLink>
          <NavLink onClick={() => this.props.scrollTo("footer-page")}>
            Contact. <span>4</span>
          </NavLink>
        </NavLinksContainer>
        <HamburgerMenu
          handleHamburgerOpening={this.props.handleHamburgerOpening}
          hamburgerIsOpen={this.props.hamburgerIsOpen}
        />
      </HeaderContainer>
    )
  }
}

export default Header
