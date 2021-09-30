import React from "react"
import Post from "./Post.js"
import styled from "styled-components"
import { device } from "../styled/globalStyles"

const StyledGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-top: 9rem;

  @media ${device.mobileL} {
    grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
    grid-gap: 3.2rem;
  }
`

export default function PostGrid({ posts }) {
  const postList = posts.map(({ node }, i) => {
    return <Post node={node} key={i}></Post>
  })
  return (
    <>
      <StyledGrid>{postList}</StyledGrid>
    </>
  )
}
