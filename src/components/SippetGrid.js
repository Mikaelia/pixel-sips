import React from "react"
import Sippet from "./Sippet.js"
import styled from "styled-components"
import { device } from "../styled/globalStyles"

const StyledGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media ${device.mobileL} {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 3.2rem;
  }
`

export default function SippetGrid({ sippets }) {
  const sippetList = sippets.map(({ node }, i) => {
    return <Sippet node={node} key={i}></Sippet>
  })
  return <StyledGrid>{sippetList}</StyledGrid>
}
