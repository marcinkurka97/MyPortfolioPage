import React from "react"
import styled, { keyframes, css } from "styled-components"
import NavLink from "../components/atoms/NavLink/NavLink"
import media from "../theme/media"

const ScaleInBox = keyframes`
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0);
  }
`
const ScaleOutBox = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200%);
  }
`

const MobileMenuContainer = styled.div`
  position: fixed;
  right: 0;
  min-width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.black};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  opacity: 0.9;

  ${({ hamburgerIsOpen }) =>
    hamburgerIsOpen
      ? css`
          animation: ${ScaleInBox} 0.7s cubic-bezier(0.34, 0.615, 0.4, 0.985)
            both;
        `
      : css`
          animation: ${ScaleOutBox} 1.4s cubic-bezier(0.34, 0.615, 0.4, 0.985)
            both;
        `};
`

const StyledList = styled.ul`
  position: relative;
  padding: 0;
  z-index: 3;

  ${({ hamburgerIsOpen }) =>
    hamburgerIsOpen
      ? css`
          opacity: 1;
          transition: opacity 0.5s 0.7s ease-in;
        `
      : css`
          opacity: 0;
          transition: opacity 0.5s ease-in;
        `};

  ${media.tablet`
    li {
      list-style: none;
      text-align: center;

      a {
        font-size: 12rem;

        span {
          vertical-align: super;
          font-size: 3rem;
        }
      }
    }
  `}

  ${media.phone`
    li {
      a {
        font-size: 5.5rem;

        span {
            vertical-align: super;
            font-size: ${({ theme }) => theme.fontSize.xs};
          }
      }
    }
  `}
`

const MobileMenu = ({ hamburgerIsOpen, scrollTo }) => {
  return (
    <MobileMenuContainer hamburgerIsOpen={hamburgerIsOpen}>
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
    </MobileMenuContainer>
  )
}

export default MobileMenu
