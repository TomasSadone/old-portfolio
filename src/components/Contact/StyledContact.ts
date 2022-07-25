import styled from "styled-components";

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;

  .card {
    padding: 2rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    > * {
      max-width: 100%;
    }
  }

  .button {
    padding: 1rem 2.5rem;
    font-size: 1.125rem;
  }
  .logo-text {
    cursor: pointer;
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
  h2 {
    border-bottom: 2px solid #ff00ff;
    padding: 0.5em;
    padding-top: 0;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 2rem;
  }
  p {
    margin-bottom: 2rem;
    font-size: 1.125rem;
  }
  img {
    aspect-ratio: 1;
    width: 2rem;
  }
  @media (min-width: 47em) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .left-side {
      max-width: 60%;
    }
  }
  @media (max-width: 47em) {
    .card {
      margin: 0 auto;
    }
  }
`;
