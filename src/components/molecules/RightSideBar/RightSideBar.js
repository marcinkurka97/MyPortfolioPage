import React from "react"
import styled from "styled-components"

const SideBarContainer = styled.div`
  position: absolute;
  right: 0;
  height: calc(100% - 50px);
  width: ${({ theme }) => theme.fontSize.s};
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: ${({ theme }) => theme.fontSize.s};
`

const ProgressDot = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  margin: 0.75rem 0;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.gray};
  transition: transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:nth-child(1) {
    background-color: ${({ theme }) => theme.yellow};
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.25);
  }
`

class RightSideBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <SideBarContainer>
        <ProgressBarContainer>
          <ProgressDot />
          <ProgressDot />
          <ProgressDot />
          <ProgressDot />
          <ProgressDot />
        </ProgressBarContainer>
      </SideBarContainer>
    )
  }
}

export default RightSideBar
