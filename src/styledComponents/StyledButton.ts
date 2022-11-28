import styled from "styled-components";

interface Props {
  background: "1a1a1a" | "1A1A1A" | "202020";
  padding?: string;
}

export const StyledButton = styled.button<Props>`
  ${(props) => {
    const { background, padding } = props;
    const hashBackground = `#${background}`;
    const background2 = `${background}2`;
    return `
  color: white;
  font-size: 1rem;
  padding: ${padding || "0.625em 2.5em"};
  border-radius: 0.625rem;
  border: 2.5px solid transparent;
  cursor: pointer;

  @property --${background} {
    syntax: "<color>";
    initial-value: ${hashBackground};
    inherits: false;
  }
  @property --${background2} {
    syntax: "<color>";
    initial-value: ${hashBackground};
    inherits: false;
  }
  background: linear-gradient(
        to right,
        var(--${background}, ${hashBackground}),
        var(--${background2}, ${hashBackground})
      )
      padding-box,
    linear-gradient(to right, #0000ff, #ff00ff) border-box;
  transition: --${background} 0.3s ease-in-out, --${background2} 0.3s ease-in-out;

  :hover {
    --${background}: #0000ff;
    --${background2}: #ff00ff;
  }
  `;
  }}
`;
