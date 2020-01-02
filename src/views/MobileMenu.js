import React from "react"
import styled, { keyframes, css } from "styled-components"
import NavLink from "../components/atoms/NavLink/NavLink"

const ScaleInBox = keyframes`
  0% {
    min-width: 0%;
  }
  100% {
    min-width: 100vw;
  }
`
const ScaleOutBox = keyframes`
  0% {
    min-width: 100vw;
  }
  100% {
    min-width: 0;
  }
`

const MobileMenuContainer = styled.div`
  position: absolute;
  right: 0;
  min-width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.black};
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ hamburgerIsOpen }) =>
    hamburgerIsOpen
      ? css`
          animation: ${ScaleInBox} 0.7s cubic-bezier(0.34, 0.615, 0.4, 0.985)
            both;
        `
      : css`
          animation: ${ScaleOutBox} 0.7s 0.15s
            cubic-bezier(0.34, 0.615, 0.4, 0.985) both;
        `};
`

const StyledList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  opacity: ${({ hamburgerIsOpen }) => (hamburgerIsOpen ? 1 : 0)};
  ${({ hamburgerIsOpen }) =>
    hamburgerIsOpen
      ? css`
          transition: opacity 0.5s 0.7s ease-in;
        `
      : css`
          transition: opacity 0.1s ease-in;
        `};

  padding: 0;

  li {
    list-style: none;

    a {
      font-size: 5.5rem;
      span {
        vertical-align: super;
        font-size: ${({ theme }) => theme.fontSize.xs};
      }
    }
  }
`

const MobileMenu = ({ hamburgerIsOpen, scrollTo }) => {
  return (
    <>
      <MobileMenuContainer
        hamburgerIsOpen={hamburgerIsOpen}
      ></MobileMenuContainer>
      <StyledList hamburgerIsOpen={hamburgerIsOpen}>
        <li>
          <NavLink onClick={() => scrollTo("landing-page")}>
            Home. <span>1</span>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => scrollTo("first-project-page")}>
            Projects. <span>2</span>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => scrollTo("about-page")}>
            About. <span>3</span>
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => scrollTo("footer-page")}>
            Contact. <span>4</span>
          </NavLink>
        </li>
      </StyledList>
    </>
  )
}

export default MobileMenu
