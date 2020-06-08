import React from "react"
import styled, { keyframes } from "styled-components"

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
      background-position: top;
}

80% {
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

30% {
transform: rotate(100deg);
top: 5px;
left: -8px;
}

40% {

  top: -5px;
}

60% {
transform: rotate(180deg);
  top: 10px;
  left: 20px;

}


60% {
  z-index: -1;
}

100% {
z-index: -1;
}


`

const HeaderSection = styled.section`
  background: ${props => props.theme.black};
  height: 30rem;
  color: ${props => props.theme.white};
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    display: flex;
    align-items: center;
  }

  .cup-wrapper {
    position: relative;
  }

  p {
    font-family: "Bai Jamjuree", sans-serif;
    font-weight: 700;
  }
  .s {
    color: transparent;
    position: relative;
    -webkit-background-clip: text, padding-box;
    background-clip: text, padding-box;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      to top,
      ${props => props.theme.yellow} 50%,
      ${props => props.theme.white} 50%
    );
    background-size: 100% 200%;
    background-position: top;
    animation: ${fill} 2s ease infinite;
  }

  .cup {
    position: relative;
    margin-left: 2rem;
    margin-bottom: 8px;
    height: 3rem;
    width: 2.4rem;
    border-radius: 0.5rem;
    background: ${props => props.theme.pink};
    transform: rotate(-20deg);
    animation: ${rotate} 2s linear infinite;
    z-index: 0;
    :hover {
      transform: rotate(-40deg);
    }

    :before {
      content: "";
      position: absolute;
      height: 2rem;
      width: 1rem;
      background: ${props => props.theme.black};
      right: -8px;
      top: 0.5rem;
      border-radius: 0.3rem;
      box-shadow: inset 0 0 0 2.5px ${props => props.theme.pink};
    }

    :after {
      content: "";
      position: absolute;
      height: 3.5px;
      width: 1.8rem;
      background: ${props => props.theme.yellow};
      top: 2px;
      left: 2.5px;
      border-radius: 50%;
    }
  }
  .splash {
    position: absolute;
    transform: rotate(180deg) skew(12deg);
    top: 0px;
    left: 20px;
    height: 0.6rem;
    width: 0.6rem;
    border-radius: 0 50% 50% 50%;
    background: ${props => props.theme.yellow};
    z-index: 1;
    animation: ${spill} 2s infinite;
  }
`

export default function MainHeader() {
  return (
    <HeaderSection>
      <div className="title">
        <p>
          pixel sip<span className="s">s</span>
        </p>
        <div className="cup-wrapper">
          <div className="splash"></div>
          <div className="cup"></div>
        </div>
      </div>
    </HeaderSection>
  )
}
