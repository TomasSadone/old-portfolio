import React from "react";
import { StyledMainPage } from "./StyledMainPage";
import gitLogo from "../../img/github2.svg";
import linkedinLogo from "../../img/linkedin 3.svg";
import mainImage from "../../img/cuate.svg";
import { Container } from "../../styledComponents/Container";
import { StyledSection } from "../../styledComponents/StyledSection";
import { openLinks } from "../../helpers/openLink";

export const MainPage: React.FC = () => {
  return (
    <StyledSection>
      <StyledMainPage>
        <Container className="container">
          <div className="max-width" id="text">
            Hello, my name is
            <br />
            <span id="tomas-sadone">Tomas Sadone</span> <br />
            <span id="f-e-dev">I&apos;m a Front-End Developer</span> <br />
            <span id="description">
              I&apos;m specialized in building responsive SPA with
              <span id="react"> React.js.</span> <br />
              Scroll to let my portfolio guide you through my skills.
            </span>
          </div>
          <div className="max-width" id="image">
            <img src={mainImage} />
          </div>
        </Container>
        <a onClick={() => openLinks("mailto:tomisadone27@gmail.com")} id="mail">
          tomisadone27@gmail.com
        </a>
        <div className="vertical-line">
          <img
            onClick={() =>
              openLinks(
                "https://www.linkedin.com/in/tom%C3%A1s-sadone-235483181/"
              )
            }
            src={linkedinLogo}
          />
          <img
            onClick={() => openLinks("https://github.com/TomasSadone")}
            src={gitLogo}
          />
        </div>
      </StyledMainPage>
    </StyledSection>
  );
};
