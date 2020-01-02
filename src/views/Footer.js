import React from "react"
import styled from "styled-components"
import Contact from "./Contact"
import Heading from "../components/atoms/Heading/Heading"
import media from "../theme/media"

const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  height: 70%;
  background: ${({ theme }) => theme.yellow};
  display: flex;
  justify-content: center;
  align-items: center;

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
      <FooterContainer id="footer-page">
        <StyledHeading>Contact me</StyledHeading>
        <Contact />
      </FooterContainer>
    )
  }
}

export default FirstProject
