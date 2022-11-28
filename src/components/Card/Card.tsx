import React from "react";
import { openLinks } from "../../helpers/openLink";
import { StyledButton } from "../../styledComponents/StyledButton";
import { Links } from "../../types/Links";
import { StyledCard } from "./StyledCard";

type Props = {
  image: string;
  text: string;
  title: string;
  oneButton?: boolean;
  codeLink: Links;
  pageLink?: Links;
};

export const Card: React.FC<Props> = props => {
  const { image, text, title, oneButton, codeLink, pageLink } = props;
  console.log(oneButton, title);
  return (
    <StyledCard>
      <img className='image ' src={image} alt='website mockup' />
      <div className=''>
        <h3>{title}</h3>
        <div className='text '>{text}</div>
        <div className='buttons'>
          <StyledButton
            onClick={() => openLinks(codeLink)}
            className='styled-button'
            background='202020'
          >
            CODE
          </StyledButton>
          {!oneButton && pageLink ? (
            <StyledButton
              onClick={() => openLinks(pageLink)}
              className='styled-button'
              background='202020'
            >
              PAGE
            </StyledButton>
          ) : (
            ""
          )}
        </div>
      </div>
    </StyledCard>
  );
};
