// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, graphql } from "gatsby"
import Layout from "../components/Layout.js"
// import SEO from "../components/seo"
import styled from "styled-components"
import PostGrid from "../components/PostGrid.js"
import MainHeader from "../components/MainHeader.js"
import { device } from "../styled/globalStyles"

const MainSection = styled.section`
  background:${props => props.theme.black};
  padding: 3rem 1rem;
  @media ${device.tablet} {
    padding: 3rem 3rem;
  }
  .grid-wrapper {
    margin: auto;
    max-width: 1350px;
  }
`
type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMdx: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  console.log(posts)
  return (
    <Layout location={location} title={siteTitle}>
      {/* <SEO title="All posts" /> */}
      <MainHeader />

      <MainSection>
        <div className="grid-wrapper">
          <PostGrid posts={posts} />
        </div>
      </MainSection>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/pages/" }
        fields: { slug: { ne: null } }
        frontmatter: { published: { eq: true } }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
