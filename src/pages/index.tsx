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
  color: ${props => props.theme.white};
  font-size: 4rem;
  font-family: "Bai Jamjuree";
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;

  .cup {
    position: relative;
    margin-left: 2rem;
    height: 3rem;
    width: 2rem;
    border-radius: 0.5rem;
    background: ${props => props.theme.pink};
    transform: rotate(-20deg);

    :before {
      content: "";
      position: absolute;
      height: 2rem;
      width: 1rem;
      background: ${props => props.theme.black};
      right: -0.9rem;
      top: 0.5rem;
      border-radius: 0.3rem;
      box-shadow: inset 0 0 0 2.5px ${props => props.theme.pink};
    }

    :after {
      content: "";
      position: absolute;
      height: 0.4rem;
      width: 1.5rem;
      background: ${props => props.theme.yellow};
      top: 1px;
      left: 2.5px;
      border-radius: 50%;
    }

    .splash {
      position: absolute;
      transform: rotate(180deg) skew(12deg);
      top: -10px;
      left: -6px;
      height: 0.6rem;
      width: 0.6rem;
      border-radius: 0 50% 50% 50%;
      background: ${props => props.theme.yellow};
    }
  }
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
      <HeaderSection>
        <p>pixel sips</p>
        <div className="cup">
          <div className="splash"></div>
        </div>
      </HeaderSection>
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
