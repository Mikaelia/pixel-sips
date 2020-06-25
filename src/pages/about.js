import React from "react"
import Layout from "../components/Layout.js"
import styled from "styled-components"
import {
  TwitterIcon,
  LinkedInIcon,
  GlobeIcon,
  GithubIcon,
  CodepenIcon,
} from "../components/assets/socialMediaIcons"
import { device } from "../styled/globalStyles"
import { useSpring, animated } from "react-spring"

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 40,
  (x - window.innerWidth / 2) / 40,
  1.05,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const StyledAbout = styled(animated.div)`
  height: 100%;
  max-width: 755px;
  margin: auto;
  display: flex;
  align-items: center;

  article {
    flex: 1;
    background: white;
    padding: 10rem 4rem;
    height: 95%;

    @media ${device.mobileL} {
      height: auto;
      height: auto;
      border-radius: 0.5rem;
      padding: 8rem;
      box-shadow: rgba(73, 73, 80, 0.1) 2px 4.45528px 6.06029px,
        rgba(73, 73, 80, 0.05) 0px 10.7067px 14.5637px,
        rgba(73, 73, 80, 0.04) 0px 20.1597px 27.4222px,
        rgba(73, 73, 80, 0.03) 0px 35.9615px 48.9165px;
    }

    header {
      text-align: center;
      padding-bottom: 3rem;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      font-size: 3rem;
      color: ${props => props.theme.pink};
    }

    .icons {
      display: flex;
      justify-content: space-between;
      width: 15rem;
    }

    .icons > * {
      height: 2rem;
      width: 2rem;
    }
  }
`

export default function About({ node }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  return (
    <Layout>
      <StyledAbout
        style={{ transform: props.xys.interpolate(trans) }}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
      >
        <article>
          <header>
            <h1>Hello</h1>
            <div className="icons">
              <a
                href="https://www.mikaelagurney.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GlobeIcon fill="rgba(18, 23, 46, 1.00)" />
              </a>
              <a
                href="https://www.linkedin.com/in/mikaela-gurney/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedInIcon fill="rgba(18, 23, 46, 1.00)" />
              </a>
              <a
                href="https://github.com/Mikaelia"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GithubIcon fill="rgba(18, 23, 46, 1.00)" />
              </a>
              <a
                href="https://twitter.com/MikaelaGurney"
                rel="noopener noreferrer"
                target="_blank"
              >
                <TwitterIcon fill="rgba(18, 23, 46, 1.00)" />
              </a>
              <a
                href="https://codepen.io/Mikiaela"
                rel="noopener noreferrer"
                target="_blank"
              >
                <CodepenIcon fill="rgba(18, 23, 46, 1.00)" />
              </a>
            </div>
          </header>

          <p>
            My name's Mikaela. I'm a frontend developer currently living and
            working in San Francisco, CA.
          </p>
        </article>
      </StyledAbout>
    </Layout>
  )
}
