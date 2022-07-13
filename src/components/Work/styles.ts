import styled from "styled-components";

export const StyledWork = styled.div`
  .card-container {
    // si quisiera que crezca en tamaño mediano de tablet:
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > * {
        flex: 0 1 400px;
    }
    gap: 2.5rem;
  }
`;
