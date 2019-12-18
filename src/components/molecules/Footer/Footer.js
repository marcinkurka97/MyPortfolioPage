import React from "react"
import styled, { keyframes } from "styled-components"

const ExpandLine = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 75%;
  }
`

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: ${({ theme }) => theme.fontSize.s};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FooterLine = styled.span`
  width: 75%;
  height: 1px;
  background-color: ${({ theme }) => theme.gray};
  animation: ${ExpandLine} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`

const Footer = () => (
  <FooterContainer>
    <FooterLine />
  </FooterContainer>
)

export default Footer
