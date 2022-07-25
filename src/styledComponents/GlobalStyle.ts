import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  margin: 0;
}

html {
  background-color: #1a1a1a;
  margin: 0;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  scroll-behavior: smooth;
  scroll-padding-top: 20px;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 20px;

  }
}

@media (max-width: 1280px) {
  html {
    font-size: 14px;
  }
}

/* .section {
  padding-top: 1rem;
}
@media (min-width: 47em) {
  .section{
    padding-top: 3rem;
  }
} */
/* 
  en vez de usar divs puedo hacer un custom div que tenga los padding
  le pongo el mismo className que ya tiene y listo.
  Tambien los section, con sus media
*/

`;
