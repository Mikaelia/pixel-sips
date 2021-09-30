import React from "react"
import Nav from "./Nav.js"
import Footer from "./Footer.js"
import { Location } from "@reach/router"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../styled/globalStyles"
import { Helmet } from "react-helmet"

const MainWrapper = styled.div`
  // padding-top: 3rem;
  width: 100%;
  // height: 100%;
  height: ${props => props.location.pathname === "/" && "100%"};
  /* max-width: 1200px; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props =>
    props.location.pathname === "/" ? props.theme.black : "white"};
  main {
    flex: 1 0 auto;
    z-index: 0;
    background: rgb(18, 23, 46);
    position: relative;
    padding-bottom: ${props =>
    props.location.pathname === "/" ? "15rem" : "0"};
  }

  footer {
    flex-shrink: 0;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PixelSips</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Location>
          {({ location }) => (
            <MainWrapper location={location}>
              <Nav location={location}></Nav>
              <main>{children}</main>
              <Footer />
            </MainWrapper>
          )}

          {/* <Location>
            {({ location }) => <Nav location={location}></Nav>}
          </Location> */}
        </Location>
      </ThemeProvider>
    </>
  )
}

export default Layout
