import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');
  @import url('https://www.fontify.me/wf/5cadda71927d4c172de0ef26912edb13'); /* Futura Bold */
  @import url('https://www.fontify.me/wf/2e95df6feee620b447e733c01f6d4098');


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
    /* font-family: "Montserrat", sans-serif; */
    font-family: font92806, sans-serif;
    background-color: #282828;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`

export default GlobalStyle
