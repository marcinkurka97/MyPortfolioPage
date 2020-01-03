import React from "react"
import styled from "styled-components"
import media from "../theme/media"

const ContentContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProjectContent = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.tablet`
    width: 80%;
    flex-direction: column;
  `}

  ${media.phone`
    width: 100%;
    flex-direction: column;
  `}
`

const ContentTemplate = ({ children, id }) => (
  <>
    <ContentContainer id={id}>
      <ProjectContent>{children}</ProjectContent>
    </ContentContainer>
  </>
)

export default ContentTemplate
