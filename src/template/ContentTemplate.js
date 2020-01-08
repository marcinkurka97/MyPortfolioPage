import React from "react"
import styled, { keyframes, css } from "styled-components"
import media from "../theme/media"

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

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
  width: 60%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.tablet`
    width: 60%;
    height: 80%;
    flex-direction: column;
  `}

  ${media.phone`
    width: 100%;
    height: auto;
    flex-direction: column;
  `}
`

const ProjectLeft = styled.div`
  position: relative;
  height: 100%;
  width: calc(7.5% + 5rem);

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    min-height: 100%;
    background: ${({ theme, imageContent }) =>
      imageContent ? theme.yellow : ""};
    z-index: -1;
    opacity: 0;

    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBox} 1.5s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
      `};
  }

  ${media.tablet`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
  `}

  ${media.phone`
    width: calc(100% - 6rem);
    height: auto;
    display: flex;
    justify-content: center;
  `}
`

const SectionTitle = styled.h3`
  opacity: 0;
  color: ${({ theme, imageContent }) =>
    imageContent ? theme.black : theme.gray};
  padding: ${({ imageContent }) =>
    imageContent ? "1.5rem 0 0 0" : "1.5rem 0 0 0"};
  margin: 0;
  font-size: 1.6rem;
  padding-left: 2rem;

  animation: ${({ active }) =>
    active &&
    css`
      ${FadeIn} 2s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.tablet`
    width: 100%;
    padding: 0;
    font-size: 3rem;
  `}

  ${media.phone`
    width: 100%;
    padding: 0;
    font-size: 1.6rem;

  `}
`

const ProjectDescriptionContainer = styled.div`
  height: 100%;
  width: calc(92.5% - 5rem);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  ${media.tablet`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;

  `}

  ${media.phone`
    width: 100%;
    height: auto;
  `}
`

const ContentTemplate = ({ children, id, imageContent, type, active }) => (
  <>
    <ContentContainer id={id}>
      <ProjectContent>
        <ProjectLeft imageContent={imageContent} active={active}>
          <SectionTitle imageContent={imageContent} active={active}>
            {type}
          </SectionTitle>
        </ProjectLeft>
        <ProjectDescriptionContainer imageContent={imageContent}>
          {children}
        </ProjectDescriptionContainer>
      </ProjectContent>
    </ContentContainer>
  </>
)

export default ContentTemplate
