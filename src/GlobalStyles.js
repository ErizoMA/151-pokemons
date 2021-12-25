import { Global, css } from "@emotion/react";

function GlobalStyle() {
  return <Global styles={GlobalStyles} />;
}

const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter&family=Karla:wght@400;700&family=Montserrat:wght@500&family=Roboto&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Karla", sans-serif;
    height: 100vh;
  }
`;

export default GlobalStyle;
