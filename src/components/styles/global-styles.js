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
`;

export default GlobalStyles;
