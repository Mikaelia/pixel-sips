import React, { useRef, useEffect } from "react"
import { animated } from "react-spring"
import { useBoop } from "../utility/useBoop"

import Logo from "./Logo"

export default function NavLogo(props) {
  const [style, trigger] = useBoop({ rotation: 20 })

  useEffect(() => {
    console.log("change")
    if (props.triggerAnimation) trigger()
  }, [props.triggerAnimation])

  return (
    <animated.svg
      style={style}
      onMouseEnter={trigger}
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
    </animated.svg>
  )
}
