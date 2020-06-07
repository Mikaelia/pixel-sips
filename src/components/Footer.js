import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background: ${props => props.theme.black};
  height: 15rem;
  color: ${props => props.theme.white};
  display: flex;
  align-items: flex-end;
  padding: 3rem;
`
export default function Footer() {
  return (
    <StyledFooter>
      <span>© 2020-present Mikaela Gurney.</span>
    </StyledFooter>
  )
}
