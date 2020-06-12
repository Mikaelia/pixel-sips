import React from "react"
import styled from "styled-components"
import Logo from "./Logo.js"

const HeaderSection = styled.section`
  background: ${props => props.theme.black};
  height: 30rem;
  color: ${props => props.theme.white};
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 3rem;
`

export default function MainHeader() {
  return (
    <HeaderSection>
      <Logo />
    </HeaderSection>
  )
}
