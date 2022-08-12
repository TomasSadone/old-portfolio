import React from "react";
import { StyledSection } from "../../styledComponents/StyledSection";
import { Card } from "../Card/Card";
import { StyledWork } from "./StyledWork";
import scandiwebMockup from "../../img/mockupScandiweb.png";
import portfolioMockup from "../../img/mockupPortfolio.png";
import { title } from "process";

// type Props = {}
const scandiTilte = "eCommerce App";
const scandiText = `This is a completly dynamic website based on a GraphQL API.
It was built using React class components and libraries such as Redux, SASS, and React Router.`;
const scandiCodeLink =
  "https://github.com/TomasSadone/scandiweb-junior-react-eCommerce";

const portfolioTitle = "Portfolio";
const portfolioText = `The portfolio you are seeing. Built using react functional components, 
TypeScript and styled components. Focused on style and responsiveness.`;
const portfolioCodeLink = "https://github.com/TomasSadone/myPortfolio";

const instagramCardTitle = "Instagram Card";
const instagramCardText = `Challenge for a company hiring process, it got me in the top 4 over
 more than 200 applicants. No JS or CSS framework. 
 Followed CUBE CSS syntax and used an API and library I was given`;
const instagramCardCodeLink = "https://github.com/TomasSadone/instagram-card";
const instagramCardPageLink = "https://afraid-aftermath.surge.sh/";

export const Work: React.FC = () => {
  return (
    <StyledSection>
      <StyledWork>
        <h1>Work</h1>
        <div className="card-container">
          <Card
            codeLink={instagramCardCodeLink}
            pageLink={instagramCardPageLink}
            title={instagramCardTitle}
            text={instagramCardText}
            image={scandiwebMockup}
          />
          <Card
            codeLink={scandiCodeLink}
            image={scandiwebMockup}
            title={scandiTilte}
            text={scandiText}
            oneButton={true}
          />
          <Card
            codeLink={portfolioCodeLink}
            oneButton={true}
            image={portfolioMockup}
            title={portfolioTitle}
            text={portfolioText}
          />
        </div>
      </StyledWork>
    </StyledSection>
  );
};
