import React, { memo } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './globalStyles'
import theme from './theme'
import Home from './pages/Home'
import Header from './ui/molecules/Header'
import query from './const/mediaQueries'

const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 575px;
  @media ${query.lessThanMedium} {
    max-width: inherit;
    padding: 0 5%;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Main>
        <Home />
      </Main>
    </ThemeProvider>
  )
}

export default memo(App)
