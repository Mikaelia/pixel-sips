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
  border-bottom: 2px solid ${props => props.theme.pink};
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

  &.hidden{
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

  &.small{
    padding: 1rem;
    
    div {
      font-size: 2rem;
      margin-right: 1rem;
    }

    svg {
      height: 2rem;
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

  // const svg =
  //     <svg
  //       height="511pt"
  //       viewBox="0 1 511 511.999"
  //       width="511pt"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         fill="white"
  //         d="m498.699219 222.695312c-.015625-.011718-.027344-.027343-.039063-.039062l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.808594-33.328126-13.808594-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.441406 13.234375 31.273437 13.746093.484375.046876.96875.070313 1.457031.070313h8.320313v153.695313c0 30.417968 24.75 55.164062 55.167969 55.164062h81.710937c8.285157 0 15-6.71875 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.28125 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.164062v-153.695313h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.8125 18.359375-18.367187 18.367187-48.253906.027344-66.632813zm-21.242188 45.421876c-3.238281 3.238281-7.542969 5.023437-12.117187 5.023437h-22.71875c-8.285156 0-15 6.714844-15 15v168.695313c0 13.875-11.289063 25.164062-25.167969 25.164062h-66.710937v-105.5c0-30.417969-24.746094-55.167969-55.167969-55.167969h-48.195313c-30.421875 0-55.171875 24.75-55.171875 55.167969v105.5h-66.710937c-13.875 0-25.167969-11.289062-25.167969-25.164062v-168.695313c0-8.285156-6.714844-15-15-15h-22.328125c-.234375-.015625-.464844-.027344-.703125-.03125-4.46875-.078125-8.660156-1.851563-11.800781-4.996094-6.679688-6.679687-6.679688-17.550781 0-24.234375.003906 0 .003906-.003906.007812-.007812l.011719-.011719 208.847656-208.839844c3.234375-3.238281 7.535157-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531l208.800781 208.796875c.03125.03125.066406.0625.097656.09375 6.644531 6.691406 6.632813 17.539063-.03125 24.207032zm0 0"
  //       />
  //     </svg>

  return (
    <Navigation
      location={props.location.pathname}
      className={`nav   ${small ? "hidden" : ""}`}
    >
      <ul>
        <Link to="/">
          <div
            className={`${small ? "hidden" : ""}`}
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
