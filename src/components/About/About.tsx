import React from "react";
import { StyledSection } from "../../styledComponents/StyledSection";
import { StyledAbout } from "./StyledAbout";
import image from "../../img/about-picture.png";
import HTMLLogo from "../../img/html.svg";
import CSSLogo from "../../img/css.svg";
import reduxLogo from "../../img/redux.svg";
import JSLogo from "../../img/js.svg";
import TSLogo from "../../img/typescript.svg";
import reactLogo from "../../img/react.svg";

// type Props = {}

export const About = () => {
  return (
    <StyledSection>
      <StyledAbout>
        <h1>About</h1>
        <div className="flex">
          <div>
            <img alt="Portrait of me" src={image} />
          </div>
          <div className="max-width">
            <p>
              I&apos;m Tomas Sadone, I&apos;m 21 years old, and I like dogs and
              dirtbikes.
            </p>
            <p>
              I studied marketing at college for one and a half years but it
              wasn&apos;t for me. I&apos;m now studying web development since
              september 2021, and I can say I&apos;ve found my passion.
            </p>
            <p>
              I&apos;m aiming to become a better devoleper each day, constantly
              improving my code, my knowledge, and my skills. My first goal is
              to become an excelent front-end developer, then dive into back-end
              development, and finally be in charge of a developers team one
              day.
            </p>
            <p>Contact me if you like what I can offer.</p>
          </div>
        </div>
        <h2>Skills</h2>
        <div className="grid max-width">
          <div className="logo-text grid-item">
            <img className="logos" src={HTMLLogo} alt="HTML logo" />
            <span>HTML</span>
          </div>
          <div className="logo-text grid-item">
            <img className="logos" src={CSSLogo} alt="CSS logo" />
            <span>CSS</span>
          </div>
          <div className="logo-text grid-item">
            <img className="logos" src={JSLogo} alt="Javascript logo" />
            <span>JavaScript</span>
          </div>
          <div className="logo-text grid-item">
            <img className="logos" src={reactLogo} alt="React logo" />
            <span>React</span>
          </div>
          <div className="logo-text grid-item">
            <img className="logos" src={reduxLogo} alt="Redux logo" />
            <span>Redux</span>
          </div>
          <div className="logo-text grid-item">
            <img className="logos" src={TSLogo} alt="Typescript logo" />
            <span>TypeScript</span>
          </div>
        </div>
      </StyledAbout>
    </StyledSection>
  );
};
