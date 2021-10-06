import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
// import SEO from "../components/seo"
import styled from "styled-components"
import { device } from "../styled/globalStyles"

import { MDXRenderer } from "gatsby-plugin-mdx"

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: auto;
  background: white;

  @media ${device.tablet} {
    max-width: 825px;
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
      padding: 8rem;
    }

    @media ${device.laptop} {
      padding: 8rem 9.5rem;
    }

    header {
      text-align: center;
      padding-bottom: 0 1rem 2rem 1rem;

      @media ${device.tablet} {
        padding-bottom: 5rem;
      }

      h1 {
        font-size: 3rem;
        line-height: 4rem;
        color: ${props => props.theme.pink};

        @media ${device.mobileL} {
          font-size: 3.8rem;
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
      color: ${props => props.theme.black};

      @media ${device.mobileL} {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 3rem;
        margin-top: 3rem;
      }

      h3 {
        font-size: 2rem;
        margin-top: 2rem;
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
    padding: 9.5rem;

    li {
      list-style: none;
      margin: 2rem;
      color: ${props => props.theme.pink};
      font-size: 2rem;
      width: 20%;
    }

    ul {
      display: flex;
      justify-content: space-between;
      margin: 0;
      font-weight: 700;
    }

    h2 {
      font-size: 3rem;
      margin-top: 3rem;
      margin-bottom: 5rem;
      color: ${props => props.theme.pink};
    }
  }
`

export default ({ data, pageContext, location }) => {
  const { frontmatter, body } = data.mdx

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
