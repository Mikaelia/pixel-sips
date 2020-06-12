import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  border-top-right-radius: 3rem;

  .content {
    display: flex;
    align-items: flex-end;
    padding: 5rem 3rem;
    width: 100%;
  }

  span {
    font-size: 1rem;
  }

  .link-container {
    margin-left: auto;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${props => props.theme.yellow};
  }

  .links {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4rem;

    a {
      text-decoration: none;
      color: ${props => props.theme.white};
      cursor: pointer;
      transition: color 0.2s ease;

      :hover {
        color: ${props => props.theme.pink};
      }
    }
  }
`
export default function Footer() {
  return (
    <StyledFooter>
      <div className="content">
        <span>© 2020-present Mikaela Gurney.</span>
        <div className="link-container">
          <h4>Links</h4>
          <div className="links">
            <a
              href="https://www.mikaelagurney.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Website
            </a>
            <a
              href="https://www.linkedin.com/in/mikaela-gurney/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="https://stupefied-newton-ca65cd.netlify.app/rss.xml">
              RSS
            </a>
            <a
              href="https://twitter.com/MikaelaGurney"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}
