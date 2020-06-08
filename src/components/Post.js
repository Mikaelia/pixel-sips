import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledPost = styled.div`
  padding: 3rem;
  border-radius: 0.8rem;
  transition: 0.35s ease;
  background: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(228, 228, 231);
  border-image: initial;

  article {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.black};
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  h3,
  .read-more {
    transition: color 0.35s ease;
  }

  h3 {
    font-size: 2.2rem;
  }

  :hover {
    box-shadow: rgba(73, 73, 80, 0.06) 0px 4.45528px 6.06029px,
      rgba(73, 73, 80, 0.05) 0px 10.7067px 14.5637px,
      rgba(73, 73, 80, 0.04) 0px 20.1597px 27.4222px,
      rgba(73, 73, 80, 0.03) 0px 35.9615px 48.9165px,
      rgba(73, 73, 80, 0.02) 0px 67.2619px 91.493px,
      rgba(73, 73, 80, 0.01) 0px 161px 219px;

    border-radius: 8px;
    h3 {
      color: ${props => props.theme.pink};
    }

    .read-more {
      color: ${props => props.theme.darkBlue};
    }
  }

  p {
    margin-top: ${prop => prop.theme.spaceMed};
  }

  .read-more {
    flex-grow: 1;
    margin-top: ${prop => prop.theme.spaceMed};
    font-weight: 800;
    display: flex;
    align-items: flex-end;
  }
`

export default function Post({ node }) {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <StyledPost>
      <article key={node.fields.slug}>
        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          <header>
            <h3>{title}</h3>
          </header>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </section>
          <div className="read-more">Read more</div>
        </Link>
      </article>
    </StyledPost>
  )
}
