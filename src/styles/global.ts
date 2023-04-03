import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.carnation};
    /* background: ${(props) => props.theme.white}; */
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  body, input, button, textarea, select  {
    font: 400 16px 'Nunito', sans-serif;
  }
`
