import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-size: 15px;
        font-weight: 400;
        font-family: "Alata", sans-serif;
    }
    ol, ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.black};
    }
`;

export default GlobalStyles;
