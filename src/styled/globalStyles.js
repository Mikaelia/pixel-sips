import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        height: 100%;
    }

    body {
        box-sizing: border-box;
        font-family: 'Muli', sans-serif;
        background:rgba(231, 237, 244, 1.00);
        font-size: 1.4rem;
        letter-spacing: .05rem;
        height: 100%;
        width:  100%;
        overflow-x:hidden;

        > *{
            height: 100%;
        }

        #gatsby-focus-wrapper {
            height: 100%;
        }
    }

    h1, h2, h3, h4 {
         font-family: 'Muli', sans-serif;
         font-weight: 800;
    }
`

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

export const theme = {
  spaceSmall: "1rem",
  spaceMed: "2rem",
  black: "rgba(18, 23, 46, 1.00)",
  pink: "#D90282",
  red: "#FF1249",
  darkBlue: "#3C9EE3",
  lightBlue: "#48C7EE",
  orange: "#FF6638",
  green: "#B0CC14",
  yellow: "#FFCB03",
  purple: "#6D59EF",
  darkPurple: "#5F40AC",
  white: "#fff",
}
