import React, { Component } from "react"
import Konva from "konva"
import { Stage, Layer, Rect, Star } from "react-konva"
import {
  Spring,
  Trail,
  Globals,
  animated,
  useSpring,
} from "react-spring/renderprops"

Globals.injectFrame(
  x => requestAnimationFrame(x),
  x => cancelAnimationFrame(x)
)

Globals.injectApplyAnimatedValues(
  (instance, props) => {
    if (instance.nodeType) {
      instance._applyProps(instance, props)
    } else return false
  },
  style => style
)

const AnimatedRect = animated(Rect)
// const springProps = useSpring(() => ({ opacity: 1, from: { opacity: 0 } }))
class PixelAnimation extends Component {
  state = { width: 0, height: 0, toggle: true }
  mouse = { x: undefined, y: undefined }

  toggle = () => this.setState(state => ({ toggle: !state.toggle }))

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  updateMousePosition = e => {
    this.mouse.x = e.evt.x
    this.mouse.y = e.evt.y
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

  handleMouseOver = e => {
    console.log(e)
  }

  handleDragStart = e => {
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15,
      },
      scaleX: 1.1,
      scaleY: 1.1,
    })
  }
  handleDragEnd = e => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5,
    })
  }

  handleAnimation() {
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
  render() {
    let colorArray = [
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

    const genRects = () => {
      let cubeArray = []
      for (let i = 0; i < 800; i++) {
        let boxWidth = Math.random() * 3 + 1
        let x = Math.random() * (this.state.width - boxWidth * 2) + boxWidth,
          y = Math.random() * (this.state.height - boxWidth * 2) + boxWidth
        let dx = (Math.random() - 0.5) * 2
        let dy = (Math.random() - 0.5) * 2
        cubeArray.push(
          <AnimatedRect
            // style={{ springProps }}
            ref={node => {
              this.rect = node
            }}
            onDragEnd={this.changeLocation}
            onDragMove={this.changeLocation}
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
    const { toggle } = this.state
    return (
      <Stage
        width={this.state.width}
        height={this.state.height}
        onMouseMove={this.updateMousePosition}
      >
        <Layer>{cubes}</Layer>
      </Stage>
    )
  }
}

export default PixelAnimation
