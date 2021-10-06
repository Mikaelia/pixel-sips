import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledPost = styled.div`
  padding: 3rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: 100%;
  cursor: pointer;
  z-index: 1;
  opacity: 0.9;
  background: rgba(42, 51, 91, 0.3) none repeat scroll 0% 0%;

  // :hover {
  //   background: rgba(216, 14, 130, 0.6) none repeat scroll 0% 0%;
  // }

  :hover {
    background: rgba(42, 51, 91, 1) none repeat scroll 0% 0%;
  }
`

const StyledArticle = styled.article`
  height: 100%;

  section {
    flex-grow: 1;
  }

  a {
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  h3,
  .read-more {
    // transition: color 0.35s ease;
  }

  h3 {
    font-size: 2.2rem;
  }

  p {
    font-size: 1.6rem;
    margin-top: ${prop => prop.theme.spaceMed};
  }
`

export default function Post({ node }) {
  const title = node.frontmatter.title || node.fields.slug

  return (
    <StyledPost>
      <StyledArticle key={node.fields.slug}>
        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          <header>
            <h3>{title}</h3>
          </header>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </section>
          {/* <div className="read-more">Read more</div> */}
        </Link>
      </StyledArticle>
    </StyledPost>
  )
}
