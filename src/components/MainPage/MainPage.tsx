import React from "react";
import { StyledMainPage } from "./styles";
import gitLogo from "../../img/github2.svg";
import linkedinLogo from "../../img/linkedin 3.svg";
import mainImage from "../../img/mainImage.svg"
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
        <div className="max-width" id="text">
          Hello, my name is
          <br />
          <span id="tomas-sadone">Tomas Sadone</span> <br />
          <span id="f-e-dev">I&apos;m a Front-End Developer</span> <br />
          <span id="description">
            I&apos;ve got knowledge in <span id="react">React.js</span> , responsive CSS,
            SASS, Typescript, version control, working with APIs, and others.
          </span>
        </div>
        <div className="max-width" id="image">
          <img src={mainImage}/>
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
