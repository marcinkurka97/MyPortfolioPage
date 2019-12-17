import React from "react"
import styled from "styled-components"

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
`

const Footer = () => (
  <FooterContainer>
    <FooterLine />
  </FooterContainer>
)

export default Footer
