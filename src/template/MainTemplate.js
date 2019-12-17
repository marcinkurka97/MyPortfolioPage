import React from "react"
import SEO from "../components/seo"
import GlobalStyle from "../theme/GlobalStyle"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme/mainTheme"

const MainTemplate = ({ children }) => (
  <>
    <SEO title="Home" />
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
)

export default MainTemplate
