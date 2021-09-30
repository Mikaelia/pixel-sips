import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../styled/globalStyles"

const StyledPost = styled.div`
  padding: 3rem;
  border-radius: 0.8rem;
  background: rgba(18, 23, 46, 0.5);
  border-width: 1.5px;
  border-style: solid;
  border-color: #e7edf3;
  border-image: initial;
  height: 100%;
  cursor: pointer;
  z-index: 1;
  opacity: 0.9;

  :hover {
    background: rgba(216, 14, 130, 0.8);
    opacity: 1;
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
