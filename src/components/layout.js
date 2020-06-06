import React from "react"
import Nav from "./Nav.js"

import styled from "styled-components"
import { GlobalStyle } from "../styled/globalStyles"

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

const Layout = ({ location, title, children }) => {
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <Nav></Nav>
        <main>{children}</main>
        <footer>© 2020-present Mikaela Gurney. All Rights Reserved.</footer>
      </MainWrapper>
    </>
  )
}

export default Layout
