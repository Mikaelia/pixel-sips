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
        padding: 3rem;
        font-family: 'IBM Plex Sans', sans-serif;
    }
`
