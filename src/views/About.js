import React from "react"
import styled from "styled-components"
import Heading from "../components/atoms/Heading/Heading"
import Paragraph from "../components/atoms/Paragraph/Paragraph"
import media from "../theme/media"

const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.yellow};
  font-size: 6rem;

  ${media.phone`
    font-size: 3rem;
  `}
`

const StyledParagraph = styled(Paragraph)`
  width: 40%;
  text-align: center;
  color: ${({ theme }) => theme.gray};
  font-size: 1.8rem;
  margin: 3% 0;

  ${media.phone`
    width: 90%;
    font-size: 1.2rem;
  `}
`

const SkillsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;

  ${media.phone`
    width: 100%;
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

  ${media.phone`
    width: 50%;
    font-size: 1.1rem;
    line-height: 1.8rem;
  `}
`

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <AboutContainer id="about-page">
        <StyledHeading big>About me</StyledHeading>
        <StyledParagraph>
          My name is Marcin Kurka. I'm 23 years old and currently I'm studying
          computer science at University of Economics in Katowice. I graduated
          in computer science at Mechanical Technical High School in Racibórz. I
          have about 7 years of IT education, during which I learned everything
          from building Arduino watches, fixing mechanical issues in computer,
          creating and managing databases in MySQL to programming in C++, PHP,
          JS and C#. But building web applications was always most entertaining
          for me. Therefore I dedicated last year to learn frontend technologies
          (mostly React). I that time I was learning from Frontend Masters,
          Udemy, FreeCodeCamp and many YouTube tutorials and made several
          projects in vanilla JS as well as in React. I really like working in
          groups.
        </StyledParagraph>
        <SkillsContainer>
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
      </AboutContainer>
    )
  }
}

export default About
