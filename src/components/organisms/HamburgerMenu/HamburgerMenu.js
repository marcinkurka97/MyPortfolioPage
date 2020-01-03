import React from "react"
import styled from "styled-components"
import media from "../../../theme/media"

const HamburgerMenuContainer = styled.div`
  display: none;
  z-index: 15;

  ${media.tablet`
    display: flex;
    width: 80px;
    height: 60px;
  `}

  ${media.phone`
    display: flex;
    width: 40px;
    height: 30px;
  `}
`

const HamburgerMenuBars = styled.span`
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.gray};
  border-radius: 10px;
  transition: transform 0.25s ease-in;

  ${media.tablet`
    height: 10px;
    transform: ${({ hamburgerIsOpen }) =>
      hamburgerIsOpen ? "translateY(24px) rotate(45deg)" : ""};
  `}

  ${media.phone`
    height: 5px;
    transform: ${({ hamburgerIsOpen }) =>
      hamburgerIsOpen ? "translateY(12px) rotate(45deg)" : ""};
  `}

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    background: ${({ theme }) => theme.gray};
    border-radius: 10px;
    opacity: 1;

    ${media.tablet`
    height: 10px;
  `}

    ${media.phone`
    height: 5px;
  `}
  }

  &:before {
    opacity: ${({ hamburgerIsOpen }) => (hamburgerIsOpen ? 0 : 1)};
    transition: opacity 0.1s ease-in;

    ${media.tablet`
      top: 24px;
      `}

    ${media.phone`
      top: 12px;
      `}
  }
  &:after {
    transition: transform 0.25s ease-in;

    ${media.tablet`
      top: 48px;
      transform: ${({ hamburgerIsOpen }) =>
        hamburgerIsOpen ? "translateY(-48px) rotate(-90deg)" : ""};
      `}

    ${media.phone`
      top: 24px;
      transform: ${({ hamburgerIsOpen }) =>
        hamburgerIsOpen ? "translateY(-24px) rotate(-90deg)" : ""};
      `}
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
