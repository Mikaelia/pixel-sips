import React, { useState, useEffect } from "react"
import Konva from "konva"
import { Stage, Layer, Rect, Star } from "react-konva"
import { Spring, animated } from "react-spring/renderprops-konva"

import useWindowSize from "../utils/useWindowSize.js"

// const AnimatedRect = animated(Rect)
// const springProps = useSpring(() => ({ opacity: 1, from: { opacity: 0 } }))

class Pixel extends React.Component {}

const PixelAnimation = () => {
  const arrLength = 800
  const [elRefs, setElRefs] = React.useState([])

  React.useEffect(() => {
    // add or remove refs
    setElRefs(elRefs =>
      Array(arrLength)
        .fill()
        .map((_, i) => elRefs[i] || React.createRef())
    )
  }, [arrLength])
  const [blink, setBlink] = React.useState(true)

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
  const windowSize = useWindowSize()
  let mouse = { x: undefined, y: undefined }

  // ANIMATION
  React.useEffect(() => {
    if (!blink || !elRefs.length) {
      return
    }
    var period = 300
    for (let i = 0; i < 10; i++) {
      let anim = new Konva.Animation(frame => {
        elRefs[i].current.opacity((Math.sin(frame.time / period) + 1) / 2)
      }, elRefs[i].current.getLayer())

      anim.start()
      return () => {
        anim.stop()
      }
    }
  }, [blink])

  ///////////////////////

  let updateMousePosition = e => {
    mouse.x = e.evt.x
    mouse.y = e.evt.y
  }

  let handleAnimation = () => {
    // if (this.xcoord + this.width > canvas.width || this.xcoord - this.width < 0)
    //   this.dx = -this.dx
    // if (
    //   this.ycoord + this.width > canvas.height ||
    //   this.ycoord - this.width < 0
    // )
    //   this.dy = -this.dy
    // this.xcoord += this.dx
    // this.ycoord += this.dy
    // interactivity
    //     if (
    //       mouse.x - this.xcoord < 50 &&
    //       mouse.x - this.xcoord > -50 &&
    //       mouse.y - this.ycoord < 50 &&
    //       mouse.y - this.ycoord > -50
    //     ) {
    //       if (this.width < maxWidth) {
    //         this.width += 1
    //       }
    //     } else if (this.width > this.minWidth) {
    //       this.width -= 1
    //     }
    //     this.draw()
    //   }
  }

  let changeSize = () => {
    // to() is a method of `Konva.Node` instances
    // this.rect.to({
    //   scaleX: Math.random() + 0.8,
    //   scaleY: Math.random() + 0.8,
    //   duration: 0.2,
    // })
  }

  let genRects = () => {
    let cubeArray = []
    for (let i = 0; i < 10; i++) {
      let boxWidth = Math.random() * 20 + 1
      let x = Math.random() * (windowSize.width - boxWidth * 2) + boxWidth,
        y = Math.random() * (windowSize.height - boxWidth * 2) + boxWidth
      let dx = (Math.random() - 0.5) * 2
      let dy = (Math.random() - 0.5) * 2
      cubeArray.push(
        <Rect
          ref={elRefs[i]}
          dx={dx}
          dy={dy}
          key={i}
          x={x}
          y={y}
          draggable
          width={boxWidth}
          height={boxWidth}
          fill={colorArray[Math.floor(Math.random() * colorArray.length)]}
        />
      )
    }
    return cubeArray
  }

  let cubes = genRects()

  // let cubes = genRects()

  return (
    <Stage
      width={windowSize.width}
      height={windowSize.height}
      onMouseMove={updateMousePosition}
    >
      <Layer>{cubes}</Layer>
    </Stage>
  )
}

export default PixelAnimation
