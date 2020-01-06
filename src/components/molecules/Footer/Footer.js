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
  bottom: 0;
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.black};
  transition: background 0.25s ease-in;

  ${media.phone`
    height: 10vh;
  `}
`

const FooterLine = styled.span`
  width: 75%;
  height: 1px;
  background: ${({ theme }) => theme.gray};
  animation: ${ExpandLine} 2s cubic-bezier(0.34, 0.615, 0.4, 0.985) both;
  transition: background 0.25s ease-in;
`

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.bottomLine = React.createRef()
    this.state = {}
  }
  render() {
    return (
      <FooterContainer>
        <FooterLine ref={this.bottomLine} />
      </FooterContainer>
    )
  }
}

export default Footer
