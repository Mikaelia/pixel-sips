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
    }

    body {
        box-sizing: border-box;
        font-family: 'Muli', sans-serif;
        background: #fff;
        font-size: 1.4rem;
        letter-spacing: .05rem;
    }
    h1, h2, h3, h4 {
         font-family: 'Muli', sans-serif;
         font-weight: 800;
    }
`
export const theme = {
  spaceSmall: "1rem",
  spaceMed: "2rem",
  black: "#12182F",
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
