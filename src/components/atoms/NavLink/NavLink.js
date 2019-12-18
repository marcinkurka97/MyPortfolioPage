import styled from "styled-components"

const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.gray};
  font-weight: ${({ theme }) => theme.bold};
  transition: color, transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.yellow};
    transform: translateX(1rem);
  }
`

export default NavLink
