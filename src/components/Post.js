import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import Media from "react-media"

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 40,
  (x - window.innerWidth / 2) / 40,
  1.05,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const StyledPost = styled(animated.div)`
  padding: 3rem;
  border-radius: 0.8rem;
  transition: 0.35s ease-out;
  background: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(228, 228, 231);
  border-image: initial;

  :hover {
    box-shadow: rgba(73, 73, 80, 0.4) 2px 4.45528px 6.06029px,
      rgba(73, 73, 80, 0.05) 0px 10.7067px 14.5637px,
      rgba(73, 73, 80, 0.04) 0px 20.1597px 27.4222px,
      rgba(73, 73, 80, 0.03) 0px 35.9615px 48.9165px,
      rgba(73, 73, 80, 0.02) 0px 67.2619px 91.493px,
      rgba(73, 73, 80, 0.01) 0px 161px 219px;
    border-radius: 8px;
  }
`

const StyledPostMobile = styled.div`
  padding: 3rem;
  border-radius: 0.8rem;
  transition: 0.35s ease-out;
  background: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(228, 228, 231);
  border-image: initial;

  :hover {
    box-shadow: rgba(73, 73, 80, 0.4) 2px 4.45528px 6.06029px,
      rgba(73, 73, 80, 0.05) 0px 10.7067px 14.5637px,
      rgba(73, 73, 80, 0.04) 0px 20.1597px 27.4222px,
      rgba(73, 73, 80, 0.03) 0px 35.9615px 48.9165px,
      rgba(73, 73, 80, 0.02) 0px 67.2619px 91.493px,
      rgba(73, 73, 80, 0.01) 0px 161px 219px;
    border-radius: 8px;
  }
`
const StyledArticle = styled.article`
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
    h3 {
      color: ${props => props.theme.pink};
    }

    .read-more {
      color: ${props => props.theme.pink};
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
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  const title = node.frontmatter.title || node.fields.slug

  return (
    <>
      <Media
        query="(min-width: 1024px)"
        render={() => (
          <StyledPost
            style={{ transform: props.xys.interpolate(trans) }}
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
          >
            <StyledArticle key={node.fields.slug}>
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
            </StyledArticle>
          </StyledPost>
        )}
      />
      <Media
        query="(max-width: 1023px)"
        render={() => (
          <StyledPostMobile>
            <StyledArticle key={node.fields.slug}>
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
            </StyledArticle>
          </StyledPostMobile>
        )}
      />
    </>
  )
}
