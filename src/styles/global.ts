import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  body, input, textarea, button {
    outline: none;
    font: 400 16px 'Inter', sans-serif;
  }

  button {        
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
`;
