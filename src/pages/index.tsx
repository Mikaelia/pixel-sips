// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "styled-components"
import PostGrid from "../components/PostGrid.js"

const HeaderSection = styled.section`
  background: ${props => props.theme.black};
  height: 30rem;
`
const MainSection = styled.section`
  background: #e7edf3;
  padding: 5rem 3rem;
`
type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
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
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <HeaderSection></HeaderSection>
      <MainSection>
        <PostGrid posts={posts} />
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
