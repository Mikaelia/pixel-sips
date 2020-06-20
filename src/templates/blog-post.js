import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "styled-components"

const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 755px;
  margin: auto;
  padding-top: 15rem;

  article {
    flex: 1;
    background: white;
    padding: 1rem 8rem;
    border-radius: 0.5rem;
    box-shadow: rgba(73, 73, 80, 0.1) 2px 4.45528px 6.06029px,
      rgba(73, 73, 80, 0.05) 0px 10.7067px 14.5637px,
      rgba(73, 73, 80, 0.04) 0px 20.1597px 27.4222px,
      rgba(73, 73, 80, 0.03) 0px 35.9615px 48.9165px;
    header {
      text-align: center;
      padding: 8rem 32px 50px;
    }

    h1 {
      font-size: 3rem;
      color: ${props => props.theme.pink};
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
    margin-top: 10rem;
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
          {!previous && !next && <p>Nothing here yet!</p>}
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
