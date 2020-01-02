import { css } from "styled-components"

export const sizes = {
  laptop: 1600,
  tablet: 1150,
  phone: 767,
}

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `

  return acc
}, {})
