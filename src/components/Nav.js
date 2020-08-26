import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../styled/globalStyles"
import gsap from "gsap"

const Navigation = styled.nav`
  display: none;

  @media ${device.mobileL} {
    display: block;
    padding: 3rem;
    padding-bottom: 2rem;
    background: ${props =>
      props.location === "/" ? "transparent" : props.theme.black};
    z-index: 1;
    position: ${props => (props.location === "/" ? "absolute" : "relative")};
    width: 100%;
  }

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    margin-left: 0;
    margin-bottom: 0;
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

    .indicator {
      content: "";
      display: none;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -58px;
      width: 7px;
      height: 7px;
      background: ${props => props.theme.pink};
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
      ${props => props.theme.yellow} 50%,
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

  .nav-link--active {
    .indicator {
      display: block;
    }
  }
`
export default function Nav(props) {
  const indicator1 = useRef(null)
  const indicator2 = useRef(null)
  const indicator3 = useRef(null)
  var tl = gsap.timeline()

  useEffect(() => {
    tl.to([indicator1.current, indicator2.current, indicator3.current], {
      duration: 1.5,
      ease: "bounce.out",
      y: 55,
    })
    tl.to(
      [indicator2.current, indicator3.current],
      {
        duration: 1.5,
        left: "115%",
        rotate: "360deg",
      },
      "-=1"
    )
    tl.to(
      [indicator2.current, indicator3.current],
      {
        duration: 0.5,
        ease: "bounce.out",
        y: 65,
      },
      "-=.5"
    )
    tl.to(
      [indicator1.current],
      {
        duration: 1.5,
        left: "105%",
        rotate: "360deg",
      },
      "-=1.5"
    )
    tl.to(
      [indicator1.current],
      {
        duration: 0.5,
        ease: "bounce.out",
        y: 70,
      },
      "-=.5"
    )
    tl.to(
      [indicator1.current],
      {
        duration: 0.5,
        ease: "expo",
        width: "100%",
        x: -87,
        y: 85,
        height: 2,
        backgroundImage: "linear-gradient(to right, #D90282, transparent)",
        background: "transparent",
      },
      "+=.5"
    )
  }, [])
  return (
    <Navigation location={props.location.pathname}>
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link className="nav-link" activeClassName="nav-link--active" to="/">
            Mikaela Gurney
            <span className="indicator" ref={indicator1}></span>
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className="nav-link"
            activeClassName="nav-link--active"
            to="/about"
          >
            <span className="indicator" ref={indicator2}></span>
            About
          </Link>
        </li>
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
