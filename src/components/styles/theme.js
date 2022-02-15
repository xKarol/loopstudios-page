import { ThemeProvider } from "styled-components";

export default function Theme({ children }) {
  const theme = {
    colors: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      darkGray: "hsl(0, 0%, 55%)",
      veryDarkGray: "hsl(0, 0%, 41%)",
    },
    fonts: {
      main: "'Alata', sans-serif",
      second: "'Josefin Sans', sans-serif",
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
