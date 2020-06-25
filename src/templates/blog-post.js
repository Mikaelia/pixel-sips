import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
// import SEO from "../components/seo"
import styled from "styled-components"
import { device } from "../styled/globalStyles"
import { MDXRenderer } from "gatsby-plugin-mdx"

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 825px;
  margin: auto;

  @media ${device.tablet} {
    padding-top: 9rem;
  }

  @media ${device.laptop} {
    max-width: 900px;
  }

  article {
    flex: 1;
    background: white;
    padding: 5rem 0;

    @media ${device.tablet} {
      border-radius: 0.5rem;
      padding: 8rem;
      box-shadow: rgba(73, 73, 80, 0.1) 2px 4.45528px 6.06029px,
        rgba(73, 73, 80, 0.05) 0px 10.7067px 14.5637px,
        rgba(73, 73, 80, 0.04) 0px 20.1597px 27.4222px,
        rgba(73, 73, 80, 0.03) 0px 35.9615px 48.9165px;
    }
    @media ${device.laptop} {
      padding: 8rem 9.5rem;
    }

    header {
      text-align: center;
      padding-bottom: 2rem;
      @media ${device.tablet} {
        padding-bottom: 5rem;
      }
      @media ${device.laptop} {
        margin-left: -3rem;
        margin-right: -3rem;
      }

      h1 {
        font-size: 3rem;
        line-height: 4rem;
        color: ${props => props.theme.pink};
        @media ${device.mobileL} {
          font-size: 4rem;
          line-height: 5rem;
        }
        @media ${device.laptop} {
          font-size: 5.5rem;
          line-height: 7rem;
        }
      }

      .date {
        display: block;
        font-size: 1.2rem;
        margin-top: 2rem;
        @media ${device.mobileL} {
          margin-top: 3rem;
        }

        blockquote {
          font-style: italic;
          color: ${props => props.theme.pink};
        }
      }
    }

    blockquote {
      font-style: italic;
    }

    .post-content {
      font-size: 1.6rem;
      padding: 0 1.5rem;
      @media ${device.mobileL} {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 3rem;
      }

      a {
        color: ${props => props.theme.pink};
      }

      code {
        font-weight: bold;
        color: ${props => props.theme.black};
        background: rgba(231, 237, 244, 1);
      }

      pre[class*="language-"] {
        font-size: 1.2rem;
        line-height: 1rem;
      }
      pre {
        background: rgba(231, 237, 244, 1);
      }
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

export default ({ data, pageContext, location }) => {
  const { frontmatter, body } = data.mdx
  const { previous, next } = pageContext

  return (
    <Layout location={location}>
      <PageWrapper>
        <article>
          <header>
            <h1
              style={{
                marginBottom: 0,
              }}
            >
              {frontmatter.title}
            </h1>
            <p className="date">{frontmatter.date}</p>
          </header>
          <section className="post-content">
            <MDXRenderer>{body}</MDXRenderer>
          </section>
        </article>

        <nav className="page-links">
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

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
