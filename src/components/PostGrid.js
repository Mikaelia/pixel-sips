import React from "react"
import Post from "./Post.js"
import styled from "styled-components"

const StyledGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  grid-gap: 3.2rem;
`

export default function PostGrid({ posts }) {
  const postList = posts.map(({ node }) => {
    return <Post node={node}></Post>
  })
  return <StyledGrid>{postList}</StyledGrid>
}
