import styled from "styled-components"

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.white};
  margin: 0;
`

export default Paragraph
