import React from "react";
import { StyledButton } from "../../styledComponents/StyledButton";
import { StyledCard } from "./StyledCard";

type Props = {
  image: string;
  text: string;
  title: string;
  oneButton?: boolean;
};

export const Card: React.FC<Props> = (props) => {
  const { image, text, title, oneButton } = props;
  return (
    <StyledCard>
      <div className="image-container">
        <img className="image" src={image} alt="website mockup" />
      </div>
      <div className="bottom-half">
        <h3>{title}</h3>
        <div className="text ">{text}</div>
        <div className="buttons">
          <StyledButton className="styled-button" background="202020">CODE</StyledButton>
          {
            !oneButton && <StyledButton className="styled-button" background="202020">PAGE</StyledButton>
          }
          
        </div>

      </div>
    </StyledCard>
  );
};
