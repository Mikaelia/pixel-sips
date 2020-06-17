import React from "react"
import styled from "styled-components"
import Logo from "./Logo.js"
import useWindowSize from "../utils/useWindowSize.js"
import { device } from "../styled/globalStyles.js"

const HeaderSection = styled.section`
  background: ${props => props.theme.black};
  height: 10rem;
  padding-bottom: 8rem;

  width: 100vw;
  color: ${props => props.theme.white};
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 3rem;
  position: relative;
  @media ${device.mobileL} {
    height: 35rem;
    padding-bottom: 0;
  }

  canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    /* top: -68rem; */

    @media ${device.mobileL} {
      /* top: -58.2rem; */
    }
  }
`
const useAnimationFrame = callback => {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = React.useRef()
  const previousTimeRef = React.useRef()

  const animate = time => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current
      callback(deltaTime)
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, []) // Make sure the effect runs only once
}

const MainHeader = () => {
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

  React.useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    init()
  })

  useAnimationFrame(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    ctx.clearRect(
      0,
      0,
      canvas.getBoundingClientRect().width,
      canvas.getBoundingClientRect().height
    )

    for (let i = 0; i < cubeArray.length; i++) {
      cubeArray[i].update()
    }
  })

  class Cube {
    constructor(xcoord, ycoord, width, dx, dy) {
      this.xcoord = xcoord
      this.ycoord = ycoord
      this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
      this.width = width
      this.minWidth = width
      this.dx = dx
      this.dy = dy
      this.canvas = canvasRef.current
      this.ctx = this.canvas.getContext("2d")
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

  function init() {
    const canvas = canvasRef.current
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    cubeArray = []
    for (let i = 0; i < 200; i++) {
      let width = Math.random() * 3 + 1
      let canvasWidth = canvas.getBoundingClientRect().width
      let canvasHeight = canvas.getBoundingClientRect().height
      let x = Math.random() * (canvasWidth - width * 2) + width,
        y = Math.random() * (canvasHeight - width * 2) + width
      let dx = (Math.random() - 0.5) * 2
      let dy = (Math.random() - 0.5) * 2
      cubeArray.push(new Cube(x, y, width, dx, dy))
    }
    console.log(cubeArray)
  }

  return (
    <HeaderSection>
      <canvas
        ref={canvasRef}
        width={canvasRef.offsetWidth}
        height={canvasRef.offsetHeight}
      ></canvas>
      <Logo />
    </HeaderSection>
  )
}

export default MainHeader
