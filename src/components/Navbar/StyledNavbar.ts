import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: sticky;
  top: -1px;
  background-color: #1a1a1a;
  z-index: 1000;
  > * {
    display: flex;
    justify-content: space-between;
    max-width: 85%;
    width: 1280px;
    padding-top: 1rem;

    margin: 0 auto;
  }

  .navigation {
    align-items: center;
    display: flex;
    gap: 3rem;

    * {
      cursor: pointer;
      &:not(:last-child) {
        position: relative;
        background-color: transparent;
        color: white;
        border: 0;
        font-size: 1rem;
      }
    }
  }

  h3 {
    font-size: 1.25rem;
  }

  .hamburguer {
    display: none;
  }

  @media (min-width: 47em) {
    .navigation {
      * {
        &:not(:last-child) {
          &::before {
            content: "";
            position: absolute;
            width: 0;
            height: 3px;
            bottom: -3px;
            left: 0;
            background-color: #0000ff;
            visibility: hidden;
            transition: all 0.25s ease-in-out;
          }
          &:hover::before,
          :focus::before {
            visibility: visible;
            width: 100%;
          }
          &:focus::before {
            background-color: #ff00ff;
          }
        }
      }
    }
  }

  @media (max-width: 47em) {
    .navigation {
      position: fixed;
      inset: -1px -1px -1px 30%;
      flex-direction: column;
      padding-top: 7rem;
      gap: 4rem;

      background: #1a1a1a;
      @supports (backdrop-filter: blur()) {
        background: hsl(0 0% 40% / 0);
        backdrop-filter: blur(2rem);
      }
      .styled-button {
        width: 60%;
      }

      transform: translateX(100%);
      transition: transform 350ms ease-out;
    }
    .true {
      transform: translateX(0);
    }

    .hamburguer {
      display: block;
    }
  }
`;
