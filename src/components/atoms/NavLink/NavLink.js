import styled from "styled-components"

const NavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.gray};
  border-bottom: 1px solid ${({ theme }) => theme.gray};

  &:hover {
    cursor: pointer;
  }
`

export default NavLink
