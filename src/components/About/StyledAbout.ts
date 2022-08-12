import styled from "styled-components";

export const StyledAbout = styled.div`
  p {
    font-size: 16px;
  }
  .max-width {
    /* max-width: 20%; */
  }
  .flex {
    //first child center en pantalla chica?
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  #portrait{
    visibility: hidden;
  }

  img {
    aspect-ratio: 1;
    width: 200px;
  }

  .grid {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) */
  }

  .logo-text {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .logos {
    aspect-ratio: 1;
    width: 3rem;
  }

  @media (min-width: 47em) {
    .flex {
      flex-direction: row-reverse;
      justify-content: space-between;
    }
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .max-width {
      max-width: 70%;
    }
  }
`;
