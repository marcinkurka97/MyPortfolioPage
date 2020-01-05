import React from "react"
import styled, { keyframes } from "styled-components"
import Paragraph from "../../atoms/Paragraph/Paragraph"
import media from "../../../theme/media"

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const SideBarContainer = styled.div`
  position: fixed;
  left: 6.25vw;
  height: calc(100% - 50px);
  width: ${({ theme }) => theme.fontSize.s};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  ${media.phone`
    display: none;
  `}
`

const StyledParagraph = styled(Paragraph)`
  writing-mode: tb-rl;
  text-orientation: sideways-right;
  transform: rotate(180deg);
  color: ${({ theme }) => theme.gray};
  opacity: 0;
  animation: ${FadeIn} 1.3s 0.15s cubic-bezier(0.34, 0.615, 0.4, 0.985) both;
  transition: color 0.5s ease-in;

  ${media.tablet`
    font-size: 2rem;
  `}
`

class LeftSideBar extends React.Component {
  constructor(props) {
    super(props)
    this.leftBar = React.createRef()
    this.state = {}
  }
  render() {
    return (
      <SideBarContainer>
        <StyledParagraph ref={this.leftBar}>
          Check out my portfolio!
        </StyledParagraph>
      </SideBarContainer>
    )
  }
}

export default LeftSideBar
