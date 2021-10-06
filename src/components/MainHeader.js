import React, { useState } from "react"
import styled from "styled-components"
import Logo from "./Logo.js"
import useAnimationFrame from "../utils/useAnimationFrame.js"
import { device } from "../styled/globalStyles.js"

const HeaderSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 20rem;
  width: 100vw;
  overflow: hidden;
  background: transparent;
  color: ${props => props.theme.white};
  font-size: 4rem;
  border-bottom-left-radius: 3rem;
  margin-bottom: -9rem;

  .start-stop-icon {
    position: absolute;
    top: 3rem;
    right: 3rem;
    height: 24px;
    width: 24px;
    cursor: pointer;
  }

  @media ${device.mobileL} {
    height: 35rem;
    margin-bottom: 0;
  }
`
const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const MainHeader = () => {
  const [stopped, setStopped] = useState(false)
  let cubeArray = []
  const canvasRef = React.useRef(null)
  const colorArray = [
    "#D90282",
    "#FF1249",
    "#3C9EE3",
    "#48C7EE",
    "#FF6638",
    "#B0CC14",
    "#FFCB03",
    "#6D59EF",
    "#5F40AC",
  ]

  const startStop = () => {
    setStopped(!stopped)
    console.log(stopped)
  }

  React.useEffect(() => {
    init()
  })

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize)

    return () => {
      window.removeEventListener("resize", changeWindowSize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useAnimationFrame(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < cubeArray.length; i++) {
      cubeArray[i].update()
    }
  }, stopped)

  const changeWindowSize = () => {
    init()
  }

  function init() {
    const canvas = canvasRef.current
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    cubeArray = []
    for (let i = 0; i < 200; i++) {
      let cubeWidth = Math.random() * 3 + 1
      let canvasWidth = canvas.getBoundingClientRect().width
      let canvasHeight = canvas.getBoundingClientRect().height
      let x = Math.random() * (canvasWidth - cubeWidth * 2) + cubeWidth,
        y = Math.random() * (canvasHeight - cubeWidth * 2) + cubeWidth
      let dx = (Math.random() - 0.5) * 2
      let dy = (Math.random() - 0.5) * 2
      cubeArray.push(new Cube(x, y, cubeWidth, dx, dy, stopped))
    }
  }

  class Cube {
    constructor(xcoord, ycoord, width, dx, dy, stopped = false) {
      this.xcoord = xcoord
      this.ycoord = ycoord
      this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
      this.width = width
      this.minWidth = width
      this.dx = dx
      this.dy = dy
      this.canvas = canvasRef.current
      this.ctx = this.canvas.getContext("2d")
      this.stopped = stopped
    }

    draw() {
      this.ctx.beginPath()
      this.ctx.fillStyle = this.color
      this.ctx.rect(this.xcoord, this.ycoord, this.width, this.width)
      this.ctx.fill()
    }

    update() {
      if (
        this.xcoord + this.width > this.canvas.width ||
        this.xcoord - this.width < 0
      )
        this.dx = -this.dx
      if (
        this.ycoord + this.width > this.canvas.height ||
        this.ycoord - this.width < 0
      )
        this.dy = -this.dy

      this.xcoord += this.dx
      this.ycoord += this.dy

      this.draw()
    }
  }

  return (
    <>
      <StyledCanvas
        ref={canvasRef}
        width={canvasRef.offsetWidth}
        height={canvasRef.offsetHeight}
      ></StyledCanvas>
      <HeaderSection>
        <Logo stopped={stopped} />
        {!stopped ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="start-stop-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => startStop()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="start-stop-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => startStop()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </HeaderSection>
    </>
  )
}

export default MainHeader
