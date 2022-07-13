import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: #202020;
  border-radius: 0.8125rem;

  display: grid;
  place-items: center;

  > *,
  > *:first-child > * {
    max-width: 85%;
    font-weight: 300;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 0;
  }

  .buttons {
    padding-top: 1rem;
    padding-bottom: 2rem;
    display: flex;
    gap: 1.625rem;
    justify-content: space-around;
  }
  .styled-button {
    width: 95%;
  }
`;
