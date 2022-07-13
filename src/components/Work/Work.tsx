import React from "react";
import { StyledSection } from "../../styledComponents/StyledSection";
import { Card } from "../Card/Card";
import { StyledWork } from "./styles";
import scandiwebMockup from "../../img/mockupScandiweb.png";
import portfolioMockup from "../../img/mockupPortfolio.png";

// type Props = {}
const scandiTilte = "eCommerce App";
const scandiText = `This is a completly dynamic website based on a GraphQL API.
It was built using React class components and libraries such as Redux, SASS, and React Router.`;
const scandiCodeLink = "https://github.com/TomasSadone/scandiweb-junior-react-eCommerce"

const portfolioTitle = "Portfolio";
const portfolioCodeLink = "https://github.com/TomasSadone/myPortfolio"

export const Work: React.FC = () => {
  return (
    <StyledSection>
      <StyledWork>
        <h1 className="section">Work</h1>
        <div className="card-container">
          {/* cuando se le den los links a botones copiar de los de linkdein y 
          github la manera de abrir en otra pestaña. hasta se podria hacer helper
          la funcion */}
          <Card
          //desp hay que pasar link de pag q es. temporal por estetica.
            pageLink="https://github.com/TomasSadone/myPortfolio"
            codeLink={scandiCodeLink}
            image={scandiwebMockup}
            title={scandiTilte}
            text={scandiText}
          />
          <Card
            codeLink={portfolioCodeLink}
            oneButton={true}
            image={portfolioMockup}
            title={portfolioTitle}
            text={scandiText}
          />
        </div>
      </StyledWork>
    </StyledSection>
  );
};
