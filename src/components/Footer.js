import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background: ${props => props.theme.black};
  height: 15rem;
`
export default function Footer() {
  return (
    <StyledFooter>
      © 2020-present Mikaela Gurney. All Rights Reserved.
    </StyledFooter>
  )
}
