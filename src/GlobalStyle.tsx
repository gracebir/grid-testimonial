import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Barlow Semi Condensed', sans-serif;
        font-size: 13px;
    }

    :root{
        --color-violet: hsl(263,55%,52%);
        --color-dark-grayish: hsl(217,19%,35%);
        --color-dark-blackish: hsl(219,29%,35%);
        --color-white: hsl(0,0%,100%);
        --color-gray: hsl(0,0%,81%);
        --color-backish: hsl(210,46%, 95%);
    }
`