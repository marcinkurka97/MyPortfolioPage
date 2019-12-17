import React from "react"
import styled from "styled-components"
import Paragraph from "../../atoms/Paragraph/Paragraph"

const SideBarContainer = styled.div`
  position: absolute;
  left: 0;
  height: calc(100% - 50px);
  width: ${({ theme }) => theme.fontSize.s};
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledParagraph = styled(Paragraph)`
  writing-mode: tb-rl;
  text-orientation: sideways-right;
  transform: rotate(180deg);
  color: ${({ theme }) => theme.gray};
`

const LeftSideBar = () => (
  <SideBarContainer>
    <StyledParagraph>I like programming</StyledParagraph>
  </SideBarContainer>
)

export default LeftSideBar
