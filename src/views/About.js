import React from "react"
import styled from "styled-components"
import Heading from "../components/atoms/Heading/Heading"

const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <AboutContainer id="about-page">
        <Heading big>About</Heading>
      </AboutContainer>
    )
  }
}

export default About
