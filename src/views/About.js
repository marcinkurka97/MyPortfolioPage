import React from "react"
import styled, { keyframes, css } from "styled-components"
import Heading from "../components/atoms/Heading/Heading"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import media from "../theme/media"
import ContentTemplate from "../template/ContentTemplate"

const TextSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-200%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.yellow};
  margin-bottom: 3rem;
  width: 100%;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.laptop`
    margin-bottom: 1rem;
  `}

  ${media.phone`
    font-size: 2.8rem;
    text-align: left;
    padding: 0 0 1rem 0;
    margin: 0;
    width: calc(100% - 6rem);

  `}
`

const DescriptionContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;

  ${media.tablet`
    height: auto;
    flex-direction: column;
  `}

  ${media.phone`
    height: auto;
    flex-direction: column;
    width: calc(100% - 6rem);
  `}
`

const LeftDescription = styled.div`
  width: 50%;
  height: 100%;

  ${media.laptop`
    width: 55%;
  `}

  ${media.tablet`
    width: 100%;
  `}

  ${media.phone`
    width: 100%;
    padding-bottom: 2rem;
  `}
`

const RightDescription = styled.div`
  width: 50%;
  height: 100%;

  ${media.laptop`
    width: 45%;
  `}

  ${media.tablet`
    width: 100%;
    padding: 5rem 0 0 0;
  `}

  ${media.phone`
    width: 100%;
  `}
`

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  text-align: justify;
  color: ${({ theme }) => theme.gray};
  font-family: "Lato", sans-serif;

  font-size: 1.8rem;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 0.25s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.laptop`
    font-size: 1.8rem;
  `}

  ${media.tablet`
    font-size: 3rem;
  `}

  ${media.phone`
    width: 100%;
    font-size: 1.4rem;
    margin: 0;
  `}
`

const SkillsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${TextSlideIn} 1.3s 0.5s cubic-bezier(0.34, 0.615, 0.4, 0.985) both
    `};

  ${media.laptop`
    width: 100%;
    padding-left: 3rem;
  `}

  ${media.tablet`
    width: 100%;
    flex-direction: row;
    padding: 0;
  `}

  ${media.phone`
    width: 100%;
    padding: 0;
    flex-direction: row;
  `}
`

const Skills = styled.div`
  font-weight: ${({ theme }) => theme.bold};
  font-size: 2rem;
  color: #56b6c2;
  line-height: 2.5rem;

  .const-style {
    color: #c678bc;
  }
  .variable-style {
    color: #d18c4c;
  }
  .property-style {
    color: ${({ theme }) => theme.gray};
    margin-left: 2.5rem;
  }
  .value-style {
    color: #98b755;
  }

  ${media.laptop`
    font-size: 2rem;
    line-height: 2.2rem;
  `}

  ${media.tablet`
    &:first-of-type {
      width: auto;
    }

    &:last-of-type {
      width: auto;
    }

    font-size: 2.4rem;
    line-height: 3rem;
  `}

  ${media.phone`
    font-size: 1.1rem;
    line-height: 1.8rem;
  `}
`

class About extends React.Component {
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
      <ContentTemplate id="about-page" active={activeTab} type="About.">
        <StyledHeading big active={activeTab}>
          About me
        </StyledHeading>
        <DescriptionContainer>
          <LeftDescription>
            <StyledParagraph active={activeTab}>
              My name is Marcin Kurka. I'm 23 years old and currently I'm on my
              last year studying Computer Science at University of Economics in
              Katowice. I'am a graduate in Computer Science from the Mechanical
              Technical High School in Racibórz.
              <br />
              <br />I have about 7 years of IT education, during which I learned
              everything from building Arduino watches, fixing mechanical issues
              in computer hardware, creating and managing databases in MySQL to
              programming in C++, PHP, JS and C#. <br />
              <br />
              Over time building web applications became the most entertaining
              form of programming for me. Therefore I dedicated last year to
              learn frontend technologies (mostly React). In that time I
              educated myself from Frontend Masters, Udemy, FreeCodeCamp and
              many YouTube tutorials and made several projects in vanilla JS as
              well as in React. <br />
              <br />
              I'am aware that creating web applications requires an effort from
              different parties, and the idea of collaboration gets me motivated
              and focused to perform as good as I can. Coworking is also a
              possibility to learn something new from other, more experienced
              developers.
            </StyledParagraph>
          </LeftDescription>
          <RightDescription>
            <SkillsContainer active={activeTab}>
              <Skills>
                <span className="const-style">const</span>
                <span className="variable-style"> hardSkills</span> = &#123;
                <br />
                <span className="property-style">javaScript</span>:
                <span className="value-style"> 'junior'</span>, <br />
                <span className="property-style">html</span>:
                <span className="value-style"> 'junior'</span>, <br />
                <span className="property-style">css</span>:
                <span className="value-style"> 'junior'</span>, <br />
                <span className="property-style">react</span>:
                <span className="value-style"> 'junior'</span>, <br />
                <span className="property-style">mySql</span>:
                <span className="value-style"> 'junior'</span>, <br />
                <span className="property-style">git</span>:
                <span className="value-style"> 'junior'</span>, <br />
                <span className="property-style">figma</span>:
                <span className="value-style"> 'junior'</span>, <br />
                &#125;;
              </Skills>
              <Skills>
                <span className="const-style">const</span>
                <span className="variable-style"> softSkills</span> = &#123;
                <br />
                <span className="property-style">english</span>:
                <span className="value-style"> 'fluent'</span>, <br />
                <span className="property-style">teamWork</span>:
                <span className="value-style"> 'cooperative'</span>, <br />
                <span className="property-style">communication</span>:
                <span className="value-style"> 'open'</span>, <br />
                <span className="property-style">timeManagement</span>:
                <span className="value-style"> 'organized'</span>, <br />
                <span className="property-style">desireToLearn</span>:
                <span className="value-style"> 'very high'</span>, <br />
                &#125;;
              </Skills>
            </SkillsContainer>
          </RightDescription>
        </DescriptionContainer>
      </ContentTemplate>
    )
  }
}

export default About
