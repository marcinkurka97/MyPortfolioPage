import React from "react"
import styled from "styled-components"
import Heading from "../../atoms/Heading/Heading"

const ContentContainer = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 75%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LandingPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 53%;
    height: 100%;
    background-color: ${({ theme }) => theme.yellow};
    z-index: -1;
  }
`

const LandingHeading = styled(Heading)`
  font-size: 16rem;
  width: 55rem;
  line-height: 14rem;

  span {
    color: ${({ theme }) => theme.yellow};
  }
`

const ContentWindow = () => (
  <ContentContainer>
    <LandingPage>
      <LandingHeading>
        Hello World<span>!</span>
      </LandingHeading>
    </LandingPage>
  </ContentContainer>
)

export default ContentWindow
