import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Tag from "./Tag"

const StyledLink = styled(Link)`
  text-decoration: none;
  h3 {
    color: ${props => props.theme.pink};
    font-weight: 800;
  }

  .description {
    color: ${props => props.theme.black};
    margin-bottom: 2rem;
  }
`
const StyledSippet = styled.div`
  background: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 0.8rem;
  transition: 0.35s ease;
  cursor: pointer;
  position: relative;

  .tags {
    display: flex;
    justify-content: flex-end;
  }

  .tag {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`
export default function Sippet({ node }) {
  const title = node.frontmatter.title || node.fields.slug

  return (
    <StyledLink to={node.fields.slug}>
      <StyledSippet key={node.fields.slug}>
        <header>
          <h3>{title}</h3>
        </header>
        <section className="snippet-body">
          <p
            className="description"
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          ></p>
          <div className="tags">
            {node.frontmatter.tags &&
              node.frontmatter.tags
                .split(" ")
                .map(v => <Tag tagName={v} className="tag"></Tag>)}
          </div>
        </section>
      </StyledSippet>
    </StyledLink>
  )
}
