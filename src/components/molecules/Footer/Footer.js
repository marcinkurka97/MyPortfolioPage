import React from "react"
import styled, { keyframes } from "styled-components"
import media from "../../../theme/media"
import LinkedIn from "../../../assets/linkedin.svg"
import Github from "../../../assets/github.svg"

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
  flex-direction: column;
  background: ${({ theme }) => theme.black};
  transition: background 0.25s ease-in;

  ${media.phone`
    height: 10vh;
  `}
`

const IconsContainer = styled.div`
  position: absolute;
  bottom: 8.5vh;
  width: auto;
  height: 50px;
  opacity: 0;
  transition: opacity 0.25s ease-in;

  img {
    width: 50px;
    height: 50px;
    margin: 0 2rem;
  }

  ${media.tablet`
    bottom: 10vh;

    img {
      width: 60px;
      height: 60px;
      margin: 0 3rem;
    }
  `}

  ${media.phone`
    bottom: 4vh;

    img {
      width: 30px;
      height: 30px;
      margin: 0 1rem;
    }
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
  }
  render() {
    return (
      <FooterContainer>
        <IconsContainer>
          <a href="https://www.linkedin.com/in/marcin-kurka-9490a6130/">
            <img src={LinkedIn} alt="LinkedIn icon" />
          </a>
          <a href="https://github.com/patinos123">
            <img src={Github} alt="Github icon" />
          </a>
        </IconsContainer>
        <FooterLine ref={this.bottomLine} />
      </FooterContainer>
    )
  }
}

export default Footer
