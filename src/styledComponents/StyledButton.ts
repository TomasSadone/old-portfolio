import styled from "styled-components";

interface Props {
  background?: '#1a1a1a' | '#1A1A1A';
  padding?: string
}
// #0000FF, #FF00FF
// #202020, #202020

export const StyledButton = styled.button<Props>`
  color: white;
  font-size: 1rem;
  background: linear-gradient(
        ${props => props.background || "#202020"},
        ${props => props.background || "#202020"}
      )
      padding-box,
    linear-gradient(to right, #0000ff, #ff00ff) border-box;
  border-radius: 0.625rem;
  border: 2.5px solid transparent;
  padding: ${props => props.padding || '0.625em 2.5em'};

  :hover {
    filter: brightness(140%)
  }

`;
