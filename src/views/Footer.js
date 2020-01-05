import React from "react"
import styled, { keyframes, css } from "styled-components"
import Contact from "./Contact"
import Heading from "../components/atoms/Heading/Heading"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
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
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`

const FooterDescription = styled.div`
  position: relative;
  width: 60%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const DescriptionLeft = styled.div`
  width: calc(7.5% + 5rem);
  color: ${({ theme }) => theme.gray};
  padding: 1.5rem 0 0 0;
  margin: 0;
  font-size: 1.6rem;
  padding-left: 2rem;
`

const DescriptionRight = styled.div`
  width: calc(92.5% - 5rem);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`

const FooterYellowBox = styled.div`
  position: relative;
  width: 100%;
  min-height: 65%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

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
  font-size: 4rem;
  padding: 0 0 1rem 0;
  opacity: 0;
  color: ${({ theme }) => theme.yellow};
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

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.gray};
  opacity: 0;

  animation: ${({ active }) =>
    active &&
    css`
      ${FadeIn} 0.5s 0.7s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};
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

    if (this.props.active === true) {
      this.props.leftBar.current.leftBar.current.style.color = "#282828"
      this.props.bottomLine.current.bottomLine.current.style.background =
        "#282828"
    } else {
      this.props.leftBar.current.leftBar.current.style.color = "#a6a6a6"
      this.props.bottomLine.current.bottomLine.current.style.background =
        "#a6a6a6"
    }
  }

  render() {
    const { activeTab } = this.state
    return (
      <FooterContainer id="footer-page">
        <FooterDescription>
          <DescriptionLeft>Contact.</DescriptionLeft>
          <DescriptionRight>
            <StyledHeading active={activeTab}>Contact me</StyledHeading>
            <StyledParagraph active={activeTab}>
              If you have any questions for me or you are interested in
              collaboration, just leave me a message and I will answer asap. You
              can also check my Linked In and GitHub accounts.
            </StyledParagraph>
          </DescriptionRight>
        </FooterDescription>
        <FooterYellowBox active={activeTab}>
          <Contact active={activeTab} />
        </FooterYellowBox>
      </FooterContainer>
    )
  }
}

export default FirstProject
