// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "styled-components"
import PostGrid from "../components/PostGrid.js"
import { keyframes } from "styled-components"

const rotate = keyframes`
  0% {
    transform:  rotate(-20deg);
  }

  25% {
    transform: rotate(-40deg);
  }

  50% {
     transform:  rotate(-20deg);
  }

  75% {
    transform: rotate(0deg);
  }

  100% {
    transform:  rotate(-20deg);
  }
`
const spill = keyframes`
0% {
      background-position: top;
}

50% {
      background-position: bottom;
}

100% {
 background-position: top;
}
`

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

  .s {
      color: transparent;
      position: relative;
      -webkit-background-clip: text,padding-box;
  background-clip: text,padding-box;
  -webkit-text-fill-color: transparent;
  background-image: 
    linear-gradient(to top, ${props => props.theme.yellow} 50%, #000 50%);
      background-size: 100% 200%;
  background-position: top;
  animation: ${spill} 2s ease-in-out infinite;

  }

  .cup {
    position: relative;
    margin-left: 2rem;
    height: 3rem;
    width: 2rem;
    border-radius: 0.5rem;
    background: ${props => props.theme.pink};
    transform: rotate(-20deg);
    animation: ${rotate} 2s linear infinite;
 

    :hover {
      transform: rotate(-40deg);
    }

    :before {
      content: "";
      position: absolute;
      height: 2rem;
      width: 1rem;
      background: ${props => props.theme.black};
      right: -8px;
      top: 0.5rem;
      border-radius: 0.3rem;
      box-shadow: inset 0 0 0 2.5px ${props => props.theme.pink};
    }

    :after {
      content: "";
      position: absolute;
      height: 0.3rem;
      width: 1.5rem;
      background: ${props => props.theme.yellow};
      top: 2px;
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
      /* animation: ${spill} 0.5s linear infinite;
      animation-delay: 1s; */
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
        <p>
          pixel sip<span className="s">s</span>
        </p>
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
