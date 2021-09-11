import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    :root {
        --purple: #51247a;
        --purple2: #962a8b;
        --white: #ffffff;
        --black: #000000;
        --aqua: #00A2C7;
        --red: #e62645;
        --green: #2ea836;
        --gold: #bb9d65;
        --orange: #EB602B;
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
