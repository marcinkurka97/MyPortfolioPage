import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:300,400&display=swap');
@import url('https://www.fontify.me/wf/5cadda71927d4c172de0ef26912edb13'); /* Futura Bold */


  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: font92806, sans-serif;
    background-color: #282828;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`

export default GlobalStyle
