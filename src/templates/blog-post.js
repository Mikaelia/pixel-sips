import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "styled-components"

const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 675px;
  margin: auto;

  article {
    flex: 1;

    header {
      text-align: center;
      padding: 96px 32px 72px;
    }

    h1 {
      font-size: 3rem;
    }

    .date {
      display: block;
      font-size: 1.2rem;
      margin-top: 3rem;
    }

    section {
      font-size: 1.6rem;
    }
  }

  nav {
    flex: 0;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  h2 {
    margin-bottom: 3rem;
    font-size: 2rem;
  }

  .page-links {
    ul {
      width: 100%;
      margin: 0;
    }

    li {
      list-style: none;
    }
    a {
      padding: 0;
      color: ${props => props.theme.pink};
      font-weight: 700;
    }
  }
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <PageWrapper>
        <article>
          <header>
            <h1
              style={{
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p className="date">{post.frontmatter.date}</p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>

        <nav class="page-links">
          <h2>More Readings</h2>
          <ul>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title}
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </PageWrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
