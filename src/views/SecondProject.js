import React from "react"
import styled, { keyframes, css } from "styled-components"
import Heading from "../components/atoms/Heading/Heading"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import Button from "../components/atoms/Button/Button"
import NavLink from "../components/atoms/NavLink/NavLink"
import HomePinImg from "../assets/HomePin.png"
import media from "../theme/media"
import ContentTemplate from "../template/ContentTemplate"

const TextSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -200%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0%, 0);
  }
`

const ScaleBox = keyframes`
  0% {
    min-width: 0%;
    opacity: 1;
  }
  100% {
    min-wdith: 100%;
    opacity: 1;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    min-width: 100%;
    height: 100%;
    background: url(${HomePinImg});
    background-size: cover;
    filter: blur(5px);
    transform: scale(1.05);
    opacity: 0;
    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBox} 1.3s 1s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
      `};
  }
`

const StyledHeading = styled(Heading)`
  width: 100%;
  opacity: 0;
  padding: 2rem 0 3rem 2rem;
  color: ${({ theme }) => theme.yellow};
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.laptop`
    font-size: 6rem;
    margin-bottom: 1rem;
  `}

  ${media.tablet`
    font-size: ${({ theme }) => theme.fontSize.xxl};
    margin-bottom: 2rem;
  `}

  ${media.phone`
    font-size: ${({ theme }) => theme.fontSize.xl};
  `}
`

const DescriptionContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;
`

const LeftDescription = styled.div`
  width: 60%;
  height: 100%;
`

const RightDescription = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  padding: 0 2rem 3rem 2rem;
  opacity: 0;
  font-family: font44146, sans-serif;
  font-size: 2.4rem;
  line-height: 2.8rem;
  text-align: justify;
  color: ${({ theme }) => theme.white};
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 0.25s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.laptop`
    font-size: 1.8rem;
  `}

  ${media.tablet`
    font-size: ${({ theme }) => theme.fontSize.l};
  `}

  ${media.phone`
    font-size: ${({ theme }) => theme.fontSize.s};
  `}
`

const StyledList = styled.ul`
  margin: 0 0 0 2rem;
  opacity: 0;
  font-family: font44146, sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 3rem;
  color: ${({ theme }) => theme.white};
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 0.5s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.laptop`
    font-size: 1.8rem;
  `}

  ${media.tablet`
    font-size: ${({ theme }) => theme.fontSize.l};
  `}

  ${media.phone`
    font-size: ${({ theme }) => theme.fontSize.s};
  `}
`

const ProjectButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 0.5s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};
`

const StyledButton = styled(Button)`
  margin: 3rem 0;
  color: ${({ theme }) => theme.white};
`

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 300;

  &:hover {
    transform: initial;
    border-bottom: 1px solid ${({ theme }) => theme.yellow};
  }

  ${media.tablet`
    font-size: 2.5rem;
  `}

  ${media.phone`
    font-size: ${({ theme }) => theme.fontSize.xs};
  `}
`

class SecondProject extends React.Component {
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
      <ContentTemplate
        id="second-project-page"
        active={activeTab}
        type="Projects."
        imageContent
      >
        <ContentContainer active={activeTab}>
          <StyledHeading active={activeTab} big>
            HousePin
          </StyledHeading>
          <DescriptionContainer>
            <LeftDescription>
              <StyledParagraph active={activeTab}>
                That's my diploma work. It's gathering data from polish real
                estate sites like OLX and otodom and then placing each offer on
                map. The idea is to give users better understanding of potential
                house location and neighborhood. Users can filter offers by
                price, type or even distance from given point.
                <br />
                <br />
              </StyledParagraph>
            </LeftDescription>
            <RightDescription>
              <StyledList active={activeTab}>
                <li>React</li>
                <li>Redux</li>
                <li>Jest </li>
                <li>Google APIs</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>REST API</li>
              </StyledList>
              <ProjectButtons active={activeTab}>
                <StyledButton>Preview</StyledButton>
                <StyledNavLink>GitHub Code</StyledNavLink>
              </ProjectButtons>
            </RightDescription>
          </DescriptionContainer>
        </ContentContainer>
      </ContentTemplate>
    )
  }
}

export default SecondProject
