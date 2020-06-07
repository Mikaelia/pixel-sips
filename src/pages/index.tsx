// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, graphql } from "gatsby"
import Layout from "../components/MainLayout.js"
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
const fill = keyframes`
0% {
      background-position: top;
}

80% {
      background-position: bottom;
}

100% {
 background-position: top;
}
`

const spill = keyframes`
0% {
  top: 0px;
    left: 20px;
}

10% {
top: -5px;
}

30% {
transform: rotate(100deg);
top: 10px;
left: -10px;
}

40% {

  top: -5px;
}

60% {
transform: rotate(180deg);
  top: 10px;
    left: 20px;

}


60% {
  z-index: -1;
}

100% {
z-index: -1;
}


`

const HeaderSection = styled.section`
  background: ${props => props.theme.black};
  height: 30rem;
  color: ${props => props.theme.white};
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    display: flex;
    align-items: center;
  }

  .cup-wrapper {
    position: relative;
  }

  p {
    font-family: "Bai Jamjuree";
    font-weight: 800;
  }
  .s {
    color: transparent;
    position: relative;
    -webkit-background-clip: text, padding-box;
    background-clip: text, padding-box;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      to top,
      ${props => props.theme.yellow} 50%,
      ${props => props.theme.white} 50%
    );
    background-size: 100% 200%;
    background-position: top;
    animation: ${fill} 2s ease infinite;
  }

  .cup {
    position: relative;
    margin-left: 2rem;
    height: 3rem;
    width: 2.4rem;
    border-radius: 0.5rem;
    background: ${props => props.theme.pink};
    transform: rotate(-20deg);
    animation: ${rotate} 2s linear infinite;
    z-index: 0;
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
      height: 3.5px;
      width: 1.8rem;
      background: ${props => props.theme.yellow};
      top: 2px;
      left: 2.5px;
      border-radius: 50%;
    }
  }
  .splash {
    position: absolute;
    transform: rotate(180deg) skew(12deg);
    top: 0px;
    left: 20px;
    height: 0.6rem;
    width: 0.6rem;
    border-radius: 0 50% 50% 50%;
    background: ${props => props.theme.yellow};
    z-index: 1;
    animation: ${spill} 2s infinite;
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
        <div className="title">
          <p>
            pixel sip<span className="s">s</span>
          </p>
          <div className="cup-wrapper">
            <div className="splash"></div>
            <div className="cup"></div>
          </div>
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
