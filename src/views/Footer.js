import React from "react"
import styled, { keyframes, css } from "styled-components"
import Contact from "./Contact"
import Heading from "../components/atoms/Heading/Heading"
import media from "../theme/media"

const ScaleBox = keyframes`
  0% {
    min-height: 0%;
    opacity: 1;
  }
  100% {
    min-height: 100%;
    opacity: 1;
  }
`

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  min-height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 100%;
    background: ${({ theme }) => theme.yellow};
    opacity: 0;
    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBox} 0.7s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
      `};
  }

  ${media.phone`
    height: 80%;
  `}
`

const StyledHeading = styled(Heading)`
  position: absolute;
  top: -5rem;
  background-color: #af8800;
  border-radius: 0.5rem;
  padding: 2rem 4rem;
  font-size: 6rem;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${FadeIn} 0.5s 0.7s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.phone`
    top: -3rem;
    padding: 2rem 4rem;
    font-size: 3rem;
  `}
`

class FirstProject extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: false }
  }

  componentDidUpdate() {
    if (
      this.props.active === true &&
      this.props.active !== this.state.activeTab
    ) {
      this.setState({ activeTab: this.props.active })
    }
  }

  render() {
    const { activeTab } = this.state
    return (
      <FooterContainer id="footer-page" active={activeTab}>
        <StyledHeading active={activeTab}>Contact me</StyledHeading>
        <Contact active={activeTab} />
      </FooterContainer>
    )
  }
}

export default FirstProject
