import React from "react"
import styled, { keyframes } from "styled-components"
import media from "../../../theme/media"

const HamburgerMenuContainer = styled.div`
  width: 40px;
  height: 30px;
  display: none;

  ${media.phone`
    display: flex;
  `}
`

const HamburgerMenuBars = styled.span`
  position: relative;
  width: 100%;
  height: 5px;
  background: ${({ theme }) => theme.gray};
  border-radius: 10px;
  transform: ${({ hamburgerIsOpen }) =>
    hamburgerIsOpen ? "translateY(12px) rotate(45deg)" : ""};
  transition: transform 0.25s ease-in;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    background: ${({ theme }) => theme.gray};
    border-radius: 10px;
    opacity: 1;
  }

  &:before {
    top: 12px;
    opacity: ${({ hamburgerIsOpen }) => (hamburgerIsOpen ? 0 : 1)};
    transition: opacity 0.1s ease-in;
  }
  &:after {
    top: 24px;
    transform: ${({ hamburgerIsOpen }) =>
      hamburgerIsOpen ? "translateY(-24px) rotate(-90deg)" : ""};
    transition: transform 0.25s ease-in;
  }
`

const HamburgerMenu = ({ handleHamburgerOpening, hamburgerIsOpen }) => {
  return (
    <HamburgerMenuContainer onClick={handleHamburgerOpening}>
      <HamburgerMenuBars hamburgerIsOpen={hamburgerIsOpen} />
    </HamburgerMenuContainer>
  )
}

export default HamburgerMenu
