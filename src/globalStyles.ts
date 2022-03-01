import { createGlobalStyle } from 'styled-components'

/*
    createGlobalStyles replaces index.css.
    It's more flexible and consistent with our usage of styled components.
    Learn more about it here: https://www.styled-components.com/docs/api#createglobalstyle
*/

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family:  'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    font-size: 16px;
    font-weight: 400;
    font-feature-settings: 'case' on;
    color: #333333;
    background-color: #ffffff;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
