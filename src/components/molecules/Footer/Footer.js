import React from "react"
import styled, { keyframes } from "styled-components"
import media from "../../../theme/media"

const ExpandLine = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 75%;
  }
`

const FooterContainer = styled.div`
  position: fixed;
  bottom: 5vh;
  height: ${({ theme }) => theme.fontSize.s};
  width: 87.5%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.phone`
    bottom: 3vh;
  `}
`

const FooterLine = styled.span`
  width: 75%;
  height: 1px;
  background-color: ${({ theme }) => theme.gray};
  animation: ${ExpandLine} 2s cubic-bezier(0.34, 0.615, 0.4, 0.985) both;
`

const Footer = () => (
  <FooterContainer>
    <FooterLine />
  </FooterContainer>
)

export default Footer
