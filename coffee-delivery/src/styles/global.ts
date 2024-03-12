import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme.color.background};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-size: 1rem;
  }
`;
