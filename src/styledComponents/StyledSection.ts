import styled from "styled-components";

export const StyledSection = styled.section`
:root{
  --fs-xl:
}
  padding-top: 1rem;
  @media (min-width: 47em) {
    padding-top: 2rem;
  }

  h1 {
    font-weight: 600;
    color: #ff00ff;
    margin: 0;
    margin-left: -3vw;
    font-size: clamp(4rem, 12vw , 6rem)
  }
`;
