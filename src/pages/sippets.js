import React from "react"
import Layout from "../components/Layout.js"
import styled from "styled-components"
import { device } from "../styled/globalStyles"
import SippetGrid from "../components/SippetGrid"

const PageContainer = styled.div`
  height: calc(100% + 3rem);
  width: 100%;
  display: grid;
  justify-items: center;
  background: ${props => props.theme.black};

  .grid-container {
    width: 70%;
    max-width: 700px;
  }
`
const StyledDiv = styled.div`
  h1 {
    font-size: 5rem;
    font-weight: 800;
    color: ${p => p.theme.pink};
    margin-top: 5rem;
    margin-bottom: 0;
    text-align: center;

    @media ${device.tablet} {
      font-size: 5rem;
      font-weight: 700;
    }
  }
`
export default function Sippets({ data }) {
  const sippets = data.allMdx.edges
  console.log(sippets)
  return (
    <Layout>
      <PageContainer>
        <StyledDiv>
          <h1>Sippets</h1>
          <p
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            [ Under construction ]
          </p>
        </StyledDiv>
        <div className="grid-container">
          <SippetGrid sippets={sippets} />
        </div>
      </PageContainer>
    </Layout>
  )
}

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
        fileAbsolutePath: { regex: "/sippets/" }
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
