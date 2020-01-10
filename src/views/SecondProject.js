import React from "react"
import styled, { keyframes, css } from "styled-components"
import Heading from "../components/atoms/Heading/Heading"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import Button from "../components/atoms/Button/Button"
import NavLink from "../components/atoms/NavLink/NavLink"
import HomePinImg from "../assets/HomePinMap.png"
import media from "../theme/media"
import ContentTemplate from "../template/ContentTemplate"

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
const ScaleBoxAfter = keyframes`
  0% {
    min-height: 0%;
    opacity: 1;
  }
  50% {
    transform: translate(0, 0);
    min-height: 100%;
    opacity: 1;
  }
  100% {
    transform: translate(2.5%, 2.5%);
    opacity: 1;
    min-height: 100%;
  }
`

const StyledHeading = styled(Heading)`
  width: 100%;
  opacity: 0;
  padding: 0 0 1rem 0;
  color: ${({ theme }) => theme.yellow};
  animation: ${({ active }) =>
    active &&
    css`
      ${FadeIn} 1.3s 0.5s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.tablet`
    font-size: 5rem;
    padding: 1rem 0;
  `}

  ${media.phone`
    font-size: 2.8rem;
    text-align: left;
    padding: 1rem 0;
    margin: 0;
  `}
`

const DescriptionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  ${media.tablet`
    flex-direction: column;
    align-items: center;
  `}

  ${media.phone`
    flex-direction: column;
    align-items: center;
  `}
`

const LeftDescription = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 5rem;

  ${media.laptop`
    padding: 0 2rem;
  `}

  ${media.tablet`
    padding: 0;
    width: 100%;
  `}

  ${media.phone`
    width: calc(100% - 6rem);
    height: auto;
    padding: 0 0 3rem 0;
  `}
`

const ProjectImage = styled.div`
  position: relative;
  height: 100%;
  width: 50%;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    min-height: 100%;
    opacity: 0;
    background: ${({ theme }) => theme.yellow};
    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBoxAfter} 3s cubic-bezier(.34,.615,.4,.985) both
      `};
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    min-height: 100%;
    opacity: 0;
    background-image: url(${HomePinImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 30% center;
    animation: ${({ active }) =>
      active &&
      css`
        ${ScaleBox} 1.5s 0.5s cubic-bezier(.34,.615,.4,.985) both
      `};
  }

  ${media.tablet`
    height: 50vh;
    width: 100%;
  `}

  ${media.phone`
    height: 25vh;
    width: calc(100% - 6rem);
    order: 1;
  `}
`

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  opacity: 0;
  font-family: "Lato", sans-serif;
  font-size: 2.4rem;
  text-align: justify;
  color: ${({ theme }) => theme.gray};
  animation: ${({ active }) =>
    active &&
    css`
      ${FadeIn} 1.3s 0.75s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.laptop`
    font-size: 2rem;
  `}

  ${media.tablet`
    font-size: 3rem;
  `}

  ${media.phone`
    font-size: 1.4rem;
    padding: 0;
    height: auto;
  `}
`

const ListAndButtons = styled.div`
  width: 100%;
  display: flex;
`

const StyledList = styled.ul`
  width: 50%;
  padding-left: 2rem;
  margin: 0;
  opacity: 0;
  font-family: 'Lato', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 3rem;
  color: ${({ theme }) => theme.gray};
  animation: ${({ active }) =>
    active &&
    css`
      ${FadeIn} 1.3s 1s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.laptop`
    font-size: 2rem;
    line-height: 2.2rem;
  `}

  ${media.tablet`
    font-size: 3rem;
    line-height: 3.2rem;
    padding-left: 3rem;
  `}

  ${media.phone`
    font-size: 1.4rem;
    padding-left: 2rem;
    line-height: 2rem;

  `}
`

const ProjectButtons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-direction: column;
  font-family: "Lato", sans-serif;
  width: 50%;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${FadeIn} 1.3s 1.25s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.phone`
    align-items: flex-end;
  `}
`

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.gray};
`

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.gray};
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: "Lato", sans-serif;

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
        <DescriptionContainer>
          <LeftDescription>
            <StyledHeading active={activeTab} big>
              HousePin
            </StyledHeading>
            <StyledParagraph active={activeTab}>
              My diploma work, which is gathering data from polish real estate
              sites like OLX and otodom. It's placing each offer on map so users
              can have a better look at the place and neighborhood in which they
              are seeking potential houses. You can filter offers by price, type
              or most importantly by distance from a given point.
              <br />
              <br />
            </StyledParagraph>
            <ListAndButtons>
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
                <StyledButton>View</StyledButton>
                <StyledNavLink>GitHub Code</StyledNavLink>
              </ProjectButtons>
            </ListAndButtons>
          </LeftDescription>
          <ProjectImage active={activeTab} />
        </DescriptionContainer>
      </ContentTemplate>
    )
  }
}

export default SecondProject
