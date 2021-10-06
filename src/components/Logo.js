import React, { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { device } from "../styled/globalStyles"

const rotate = keyframes`
  0% {
    transform:  rotate(-20deg);
  }

  25% {
    transform: rotate(-40deg);
  }

  50% {
     transform:  rotate(-20deg);
  }

  75% {
    transform: rotate(0deg);
  }

  100% {
    transform:  rotate(-20deg);
  }
`
const fill = keyframes`
0% {
      background-position: bottom;
}

10% {
      background-position: bottom;
}

100% {
 background-position: top;
}
`

const spill = keyframes`
0% {
  top: 0px;
  left: 15px;
}

10% {
  top: -5px;
}

29%{
  opacity:1;
}

30% {
  transform: rotate(-100deg);
  top: 7px;
  left: -10px;
  opacity: 0
}

40% {
  top: -5px;
}

60% {
  transform: rotate(-180deg);
  top: 10px;
  left: 20px;
}


60% {
  z-index: -1;
}

100% {
z-index: -1;
 opacity: 0
}
`

const StyledLogo = styled.div`
  font-size: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: scale(.7);
  margin-left: -4rem;
  opacity: .9;
  cursor:pointer;

.paused {
  animation-play-state: paused;
}

 @media ${device.tablet} {
    font-size: 8.5rem;
    transform: scale(1);
 }

  .title {
    display: flex;
    align-items: center;
  }

  .cup-wrapper {
    position: relative;
    line-height: 1rem;
    height: 4rem;
  }

  p {
    margin: 0;
    font-family: "Muli", sans-serif;
    font-weight: 700;
    letter-spacing: 0.3rem;
  }

  span {
    color: ${props => props.theme.yellow};
  }

  .s {
    color: transparent;
    position: relative;
    -webkit-background-clip: text, padding-box;
    background-clip: text, padding-box;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      to top,
      rgba(42, 51, 91, 0.3) 33%,
      ${props => props.theme.yellow} 33%,
      ${props => props.theme.yellow} 66%,
      rgba(42, 51, 91, 0.3) 66%
    );
    background-size: 100% 250%;
    background-position: bottom;
    animation: ${fill} 2s ease infinite;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.18);
  }

  .cup {
    position: absolute;
    margin-left: 2rem;
    height: 5.5rem;
    width: 5.5rem;
    transform: rotate(-20deg);
    animation: ${rotate} 2s linear infinite;
    left: 5px;
    bottom: 0;
    :hover {
      transform: rotate(-40deg);
    }

  }
  .splash {
    position: absolute;
    transform: rotate(20deg);
    translateY(5rem);
    top: 0px;
    left: 20px;
    height: 0.7rem;
    width: 0.7rem;
    border-radius:  50% 50% 0 50%;
    background: ${props => props.theme.yellow};
    z-index: 1;
    animation: ${spill} 2s infinite;
  }
`
export default function Logo({ stopped }) {
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    setPaused(stopped)
    console.log(stopped)
  }, [stopped])

  return (
    <StyledLogo>
      <p>
        Pixel
        <span className="S">S</span>
        <span className="i">i</span>
        <span className="p">p</span>
        <span
          style={{ animationPlayState: paused ? "paused" : "running" }}
          className="s"
        >
          s
        </span>
      </p>
      <div className="cup-wrapper">
        <div
          style={{ animationPlayState: paused ? "paused" : "running" }}
          className="splash"
        ></div>
        {/* <div className="cup"></div> */}
        <svg
          style={{ animationPlayState: paused ? "paused" : "running" }}
          className="cup"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 61.64 56.81"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_2-2" data-name="Layer 2">
              <ellipse
                fill="#e2218f"
                className="cls-1"
                cx="19.32"
                cy="8.93"
                rx="19.64"
                ry="5.68"
                transform="translate(-1.9 7.29) rotate(-20.39)"
              />
            </g>
            <g id="Layer_1-2" data-name="Layer 1">
              <g id="layer1">
                <path
                  id="rect835-6"
                  fill="#ba1e70"
                  className="cls-2"
                  d="M8.07,8.53l20.3-7.39C34.11-.95,39.5-.49,41.59,5.24l10.7,29.39A11,11,0,0,1,45.7,48.75L25.4,56.14a11,11,0,0,1-14.13-6.59L.58,20.17C-1.51,14.43,2.33,10.62,8.07,8.53Z"
                />
                <g id="g1073">
                  <path
                    id="rect835"
                    fill="#ba1e70"
                    className="cls-2"
                    d="M40,3.54a7.69,7.69,0,0,0-4.6,9.86l7.1,19.5a7.67,7.67,0,0,0,9.86,4.6L56.57,36a7.66,7.66,0,0,0,4.6-9.85L54.07,6.61A7.67,7.67,0,0,0,44.21,2ZM39,7.19l4.19-1.53c4-1.46,5.7-1.49,7.5,1.7l7.07,18.93c1.36,3.65,1.47,5.57-2.57,6.91L49.66,35Z"
                  />
                  <path
                    id="rect835-6-9"
                    className="cls-3"
                    fill="#d80e82"
                    d="M8.19,8.48,18.42,4.75c5.73-2.08,11.13-1.63,13.22,4.11L42.33,38.24C44.42,44,42.54,49,36.8,51.1L26.58,54.82c-5.74,2.09-13.1.42-15.18-5.32L.7,20.12C-1.39,14.38,2.46,10.56,8.19,8.48Z"
                  />
                  <path
                    id="path898"
                    fill="#fbcc0c"
                    className="cls-4"
                    d="M37.58,3.45c.79,2.15-6.4,6.75-16,10.26s-18.1,4.6-18.88,2.45,6.56-6.31,16.2-9.82S36.8,1.29,37.58,3.45Z"
                  />
                  <path
                    id="path898-4"
                    fill="#f89a44"
                    className="cls-5"
                    d="M37.61,3.5c0,1.94-2.24,3.49-6,5.61,2.1-7.43-17.1-2-3.9-5.52C29.67,3.14,37.57,1.28,37.61,3.5Z"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </StyledLogo>
  )
}
