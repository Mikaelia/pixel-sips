import React from "react"
import styled from "styled-components"

const StyledTag = styled.div`
  font-size: 0.9rem;
  line-height: 1rem;
  background: ${props =>
    props.tagName === "Javascript" ? props.theme.lightBlue : props.theme.red};
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  display: flex;

  span {
    font-weight: 700;
    letter-spacing: 0.2rem;
    color: ${props => props.theme.black};
  }
`

export default function Tag({ tagName, className }) {
  return (
    <StyledTag className={className} tagName={tagName}>
      <span>{tagName.toUpperCase()}</span>
    </StyledTag>
  )
}
