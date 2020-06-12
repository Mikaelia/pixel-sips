import React from "react"
import Nav from "./Nav.js"
import Footer from "./Footer.js"

import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../styled/globalStyles"

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: #e7edf4;

  main {
    flex: 1 0 auto;
  }

  footer {
    flex-shrink: 0;
  }
`

const Layout = ({ location, title, children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainWrapper>
          <Nav></Nav>
          <main>{children}</main>
          <Footer />
        </MainWrapper>
      </ThemeProvider>
    </>
  )
}

export default Layout
