import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledPost = styled.div`
  padding: 3rem;
  border-radius: 0.8rem;
  transition: 0.35s ease;
  background: #fff;

  a {
    text-decoration: none;
  }

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  }
`

export default function Post({ node }) {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <StyledPost>
      <article key={node.fields.slug}>
        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          <header>
            <h3>{title}</h3>
            <small>{node.frontmatter.date}</small>
          </header>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </section>
        </Link>
      </article>
    </StyledPost>
  )
}
