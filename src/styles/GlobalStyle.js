import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    :root {
        --purple: #51247a;
        --white: #ffffff;
        --black: #000000;
    }

    * {
        // positioning
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        // text
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }

    body {
        background-color: var(--white);
        color: var(--black);

        a {
            font-family: inherit;
            font-size: inherit;
            color: inherit;
        }
    }
`;

export default GlobalStyle;