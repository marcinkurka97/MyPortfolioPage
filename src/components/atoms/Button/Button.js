import styled, { css } from "styled-components"

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.gray};
  text-decoration: none;
  padding: 0;
  background-color: transparent;
  width: 256px;
  height: 72px;
  border: 1px solid ${({ theme }) => theme.yellow};
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`

export default Button
