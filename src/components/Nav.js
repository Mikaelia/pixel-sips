import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navigation = styled.nav`
  padding: 3rem;
  background: #12182f;
  ul {
    display: flex;
    list-style: none;
    align-items: center;
  }

  ul * + * {
    margin-left: 5rem;
  }

  li:first-of-type a {
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }

  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
    letter-spacing: 0.2rem;
  }
`

export default function Nav() {
  return (
    <Navigation className="nav">
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link className="nav-link" activeClassName="nav-link--active" to="/">
            Mikaela Gurney
          </Link>
        </li>
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
