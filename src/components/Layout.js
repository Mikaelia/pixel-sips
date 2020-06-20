import React from "react"
import Nav from "./Nav.js"
import Footer from "./Footer.js"
import { Location } from "@reach/router"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../styled/globalStyles"

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  main {
    flex: 1 0 auto;
    z-index: 0;
  }

  footer {
    flex-shrink: 0;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainWrapper>
          <Location>
            {({ location }) => <Nav location={location}></Nav>}
          </Location>
          <main>{children}</main>
          <Footer />
        </MainWrapper>
      </ThemeProvider>
    </>
  )
}

export default Layout
