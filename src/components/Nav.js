import React, { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../styled/globalStyles"

import NavLogo from "./NavLogo"

import Logo from "./Logo"

const Navigation = styled.nav`
  transition: all .3s ease;
  display: ${props => (props.location === "/" ? "none" : "block")};
  position: sticky;
  top: 0;
  background: ${props => props.theme.black};
  z-index: 1;
  width: 100%;
  height: 7.1rem;

  div {
    margin: 0;
    font-family: "Muli", sans-serif;
    font-weight: 700;
    letter-spacing: 0.3rem;
    font-size: 3rem;
    color: white;
    transition: all .3s ease;
  }

  span {
    color: ${props => props.theme.yellow};
  }

  a {
    text-decoration: none;
  }

  .cup {
    width: 5rem;
    height: 3rem;
  }

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    margin-bottom: 0;
    transform: translateY(1rem);
    padding: 0 2rem;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 32rem;
    right: 8rem;
  }


  li:hover .home-about-link::before {
    background-position: bottom;
    background: ${props => props.theme.pink};
  }

  svg {
    height: 2rem;
    width: 2rem;
    cursor: pointer;
  }

  &.small{
    transition-delay: .1s;
    transform translateY(-3.5rem);

    ul {
      transition: all .1s ease;
      transform: translateY(3.5rem);
    }

    div {
      padding: 0;
      padding-right: .75rem;
      font-size: 2rem;
    }

    .cup {
      height: 2.5rem;
      width: 2.5rem;
    }
  }

`
export default function Nav(props) {
  const [animationCount, setAnimationCount] = useState(0)
  const [small, setSmall] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setSmall(window.pageYOffset >= 100)
      })
    }
  }, [])

  return (
    <Navigation
      location={props.location.pathname}
      className={`nav   ${small ? "small" : ""}`}
    >
      <ul>
        <Link to="/">
          <div
            className={`${small ? "small" : ""}`}
            onMouseEnter={() => setAnimationCount(animationCount + 1)}
          >
            Pixel
            <span>
              Sip<span className="s">s</span>
            </span>
          </div>
        </Link>
        <NavLogo triggerAnimation={animationCount}></NavLogo>

        {/* {props.location.pathname === "/" ? (
          <li className="nav-list-item">
            <Link className="home-about-link" to="/about">
              <span></span>?
            </Link>
          </li>
        ) : (
          <li className="nav-list-item">
            <Link className="home-about-link" to="/">
              <span></span>
              {svg()}
            </Link>
          </li>
        )} */}

        {/* <li className="nav-list-item">
          <Link
            className="nav-link"
            activeClassName="nav-link--active"
            to="/sippets"
          >
            <span className="indicator" ref={indicator3}></span>
            Sippets
          </Link>
        </li> */}
      </ul>
    </Navigation>
  )
}
