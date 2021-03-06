import React from "react"
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
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  font-size: 4rem;
  border-bottom-left-radius: 3rem;

  @media ${device.mobileL} {
    height: 35rem;
  }

  canvas {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

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
    init()
  })

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize)

    return () => {
      window.removeEventListener("resize", changeWindowSize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      let cubeWidth = Math.random() * 3 + 1
      let canvasWidth = canvas.getBoundingClientRect().width
      let canvasHeight = canvas.getBoundingClientRect().height
      let x = Math.random() * (canvasWidth - cubeWidth * 2) + cubeWidth,
        y = Math.random() * (canvasHeight - cubeWidth * 2) + cubeWidth
      let dx = (Math.random() - 0.5) * 2
      let dy = (Math.random() - 0.5) * 2
      cubeArray.push(new Cube(x, y, cubeWidth, dx, dy))
    }
  }

  useAnimationFrame(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < cubeArray.length; i++) {
      cubeArray[i].update()
    }
  })

  const changeWindowSize = () => {
    init()
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
