import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before, &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;

    @media screen and (max-width: 768px) {
      height: auto;
    }
  }

  #__next {
    display: flex;
  }

  ${({ theme }) => css`
    body {
      font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
      background-color: ${theme.colors.background};
      font-size: ${theme.font.size.medium};
    }
  `}

`

export default GlobalStyles
