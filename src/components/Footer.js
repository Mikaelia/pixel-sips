import React from "react"
import styled from "styled-components"
import {
  GlobeIcon,
  TwitterIcon,
  RssIcon,
  LinkedInIcon,
} from "./assets/socialMediaIcons"

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
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;

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
const IconContainer = styled.div`
  height: 2rem;
  width: 2rem;
  cursor: pointer;
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
              <IconContainer>
                <GlobeIcon fill="rgba(231, 237, 245, 1.00)" />
              </IconContainer>
            </a>
            <a
              href="https://www.linkedin.com/in/mikaela-gurney/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconContainer>
                <LinkedInIcon fill="rgba(231, 237, 245, 1.00)" />
              </IconContainer>
            </a>
            <a href="https://pixelsips.netlify.app/rss.xml">
              <IconContainer>
                <RssIcon fill="rgba(231, 237, 245, 1.00)" />
              </IconContainer>
            </a>
            <a
              href="https://twitter.com/MikaelaGurney"
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconContainer>
                <TwitterIcon fill="rgba(231, 237, 245, 1.00)" />
              </IconContainer>
            </a>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}
