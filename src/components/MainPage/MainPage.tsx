import React from "react";
import { StyledMainPage } from "./styles";
import gitLogo from "../../img/github2.svg";
import linkedinLogo from "../../img/linkedin 3.svg";
import { Container } from "../../styledComponents/Container";
// const gitLogo = require('../../img/github2.svg') as string;

// type Props = {}

export const MainPage = () => {
  const handleSocialClick = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <StyledMainPage>
      <Container className="container">
        <div className="flex-max-width" id="text">
          <div>
            <p>Hello, my name is</p>
            <div id="tomas-sadone">Tomas Sadone</div> <br />
            <span>I&apos;m a Front-End Developer</span> <br />
            I&apos;ve got knowledge in <span>React.js</span> , responsive CSS,
            SASS,Typescript, version control, working with APIs, and others.
          </div>
          <div />
        </div>
        <div className="flex-max-width">
          <div></div>
          <div />
        </div>
      </Container>
      <a
        href="mailto:tomisadone27@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        id="mail"
      >
        tomisadone27@gmail.com
      </a>
      <div className="vertical-line">
        <img
          onClick={() =>
            handleSocialClick(
              "https://www.linkedin.com/in/tom%C3%A1s-sadone-235483181/"
            )
          }
          src={linkedinLogo}
        />
        <img
          onClick={() => handleSocialClick("https://github.com/TomasSadone")}
          src={gitLogo}
        />
      </div>
    </StyledMainPage>
  );
};
