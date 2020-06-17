import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navigation = styled.nav`
  padding: 3rem;
  background: transparent;
  z-index: 1;

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
    font-size: 1.4rem;
    font-weight: 500;

    letter-spacing: 0.2rem;

    color: transparent;
    position: relative;
    -webkit-background-clip: text, padding-box;
    background-clip: text, padding-box;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      to top,
      ${props => props.theme.pink} 50%,
      ${props => props.theme.white} 50%
    );
    background-size: 100% 200%;
    background-position: top;
    transition: background-position 1s ease;

    &:hover {
      background-position: bottom;
    }
  }

  li:nth-child(1) a {
    background-image: linear-gradient(
      to top,
      ${props => props.theme.pink} 50%,
      ${props => props.theme.white} 50%
    );
  }
  li:nth-child(2) a {
    background-image: linear-gradient(
      to top,
      ${props => props.theme.lightBlue} 50%,
      ${props => props.theme.white} 50%
    );
  }
  li:nth-child(3) a {
    background-image: linear-gradient(
      to top,
      ${props => props.theme.yellow} 50%,
      ${props => props.theme.white} 50%
    );
  }
  li:nth-child(4) a {
    background-image: linear-gradient(
      to top,
      ${props => props.theme.red} 50%,
      ${props => props.theme.white} 50%
    );
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
          <Link
            className="nav-link"
            activeClassName="nav-link--active"
            to="/about"
          >
            About
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className="nav-link"
            activeClassName="nav-link--active"
            to="/sippets"
          >
            Sippets
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className="nav-link"
            activeClassName="nav-link--active"
            to="/links"
          >
            Links
          </Link>
        </li>
      </ul>
    </Navigation>
  )
}
