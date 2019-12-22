import styled from "styled-components"

const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.gray};
  text-decoration: none;
  padding: 0;
  background-color: transparent;
  border: none;
  width: 160px;
  height: 60px;
  font-weight: 600;
  font-size: 16px;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.gray};
    transition: transform 0.25s cubic-bezier(0.34, 0.615, 0.4, 0.985) 0s;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.yellow};
    top: 0.75rem;
    right: 0.75rem;
    transition: transform 0.25s cubic-bezier(0.34, 0.615, 0.4, 0.985) 0s;
  }

  &:hover {
    cursor: pointer;

    &:before {
      transform: translate(-0.75rem, 0.75rem);
    }

    &:after {
      transform: translate(0.75rem, -0.75rem);
    }
  }
`

export default Button
