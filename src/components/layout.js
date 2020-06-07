import React from "react"
import Nav from "./Nav.js"
import Footer from "./Footer.js"

import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../styled/globalStyles"

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
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
