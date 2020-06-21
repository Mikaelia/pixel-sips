import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { device } from "../styled/globalStyles"
import { MDXRenderer } from "gatsby-plugin-mdx"

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 755px;
  margin: auto;

  @media ${device.mobileL} {
    padding-top: 9rem;
  }

  @media ${device.tablet} {
    padding-top: 15rem;
  }

  article {
    flex: 1;
    background: white;
    padding: 5rem 0;

    @media ${device.tablet} {
      border-radius: 0.5rem;
      padding: 5rem 8rem;
      box-shadow: rgba(73, 73, 80, 0.1) 2px 4.45528px 6.06029px,
        rgba(73, 73, 80, 0.05) 0px 10.7067px 14.5637px,
        rgba(73, 73, 80, 0.04) 0px 20.1597px 27.4222px,
        rgba(73, 73, 80, 0.03) 0px 35.9615px 48.9165px;
    }

    header {
      text-align: center;
      padding: 0 3.2rem 2rem;
      @media ${device.tablet} {
        padding: 0 3.2rem 5rem;
      }

      h1 {
        font-size: 3rem;
        line-height: 4rem;
        color: ${props => props.theme.pink};
      }

      .date {
        display: block;
        font-size: 1.2rem;
        margin-top: 2rem;
        @media ${device.mobileL} {
          margin-top: 3rem;
        }
      }
    }

    .post-content {
      font-size: 1.6rem;
      padding: 0 1.5rem;
    }
  }

  .page-links {
    flex: 0;
    margin: 1rem 0;
    padding: 3rem;
    background: white;
    text-align: center;

    @media ${device.mobileL} {
      margin-top: 8rem;
      background: transparent;
      text-align: left;
    }

    h2 {
      margin-bottom: 3rem;
      font-size: 2rem;
      color: ${props => props.theme.pink};
    }

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
  const post = data.mdx
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
          <section className="post-content">
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
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
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
