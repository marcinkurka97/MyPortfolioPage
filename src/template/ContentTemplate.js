import React from "react"
import styled from "styled-components"

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
`

const ContentTemplate = ({ children, id }) => (
  <>
    <ContentContainer id={id}>
      <ProjectContent>{children}</ProjectContent>
    </ContentContainer>
  </>
)

export default ContentTemplate
