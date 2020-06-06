import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navigation = styled.nav`
  background: orange;
  margin-top: -3rem;

  ul {
    display: flex;
    list-style: none;
  }

  a {
    box-shadow: none;
  }
`

export default function Nav() {
  return (
    <Navigation className="nav">
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link className="nav-link" activeClassName="nav-link--active" to="/">
            About
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className="nav-link"
            activeClassName="nav-link--active"
            to="/about"
          >
            Snippets
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className="nav-link"
            activeClassName="nav-link--active"
            to="/contact"
          >
            Links
          </Link>
        </li>
      </ul>
    </Navigation>
  )
}
