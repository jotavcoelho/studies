import { createGlobalStyle } from 'styled-components';

const global = createGlobalStyle`
  * {
    padding: 0;
    outline: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #07020d;
    -webkit-font-smoothing: antialised !imported;
  }

  body, input, button {
    color: #e8fcc2;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }
`;

export default global;
