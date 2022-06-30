import styled from "styled-components";

interface Props {
    open: boolean;
}

export const HamburguerMenu = styled.button<Props>`
  position: absolute;
  width: 2.5rem;
  aspect-ratio: 1;
  background-color: transparent;
  border: none;
  top: 2rem;
  right: 2rem;
  z-index: 9999;

  span {
    display: block;
    position: relative;
  }

  span,
  span::before,
  span::after {
    width: 2em;
    height: 3px;
    background-color: white;

    transition: transform 350ms ease-in-out, opacity 200ms linear;
  }
  span {
    transition: transform 3050ms ease-in-out,
  }

  span::before,
  span::after {
    content: "";
    position: absolute;
    left: 0;
  }

  span::before {
    bottom: 6px;
  }
  span::after {
    top: 6px;
  }
  ${props => props.open ? ` {
    span{
        transform: rotate(45deg);

    }
    span::after {
      transform: rotate(90deg) translate(-6px);
    }
    span::before {
        opacity: 0;
    }
  }` : ``}

  /* .open * {
    span{
        transform: rotate(45deg);

    }
    span::after {
      transform: rotate(90deg) translate(-6px);
    }
    span::before {
        opacity: 0;
    }
  } */
`;
