import React from "react";
import { openLinks } from "../../helpers/openLink";
import { StyledButton } from "../../styledComponents/StyledButton";
import { StyledSection } from "../../styledComponents/StyledSection";
import { StyledCard } from "../Card/StyledCard";
import { StyledContact } from "./StyledContact";
import gitLogo from "../../img/github2.svg";
import linkedinLogo from "../../img/linkedin 3.svg";
import mailLogo from "../../img/mail.svg";

// type Props = {}

export const Contact = () => {
  return (
    <StyledSection>
      <StyledContact>
        <div className="left-side">
          <h1>Contact</h1>
          <div>
            <h3>That&apos;s all folks! </h3>
            <p>
              I am currently looking for new job oportunities either as a
              employee or as a freelancer, I am also interested in internships
              positions.
            </p>
            <p>
              If you liked my work and want to contact me, please feel invited
              to do so.
            </p>
            <StyledButton
              onClick={() => openLinks("mailto:tomisadone27@gmail.com")}
              className="button"
              background="1A1A1A"
            >
              SAY HELLO
            </StyledButton>
          </div>
        </div>
        <StyledCard className="card">
          <h2>Get in touch</h2>
          <ul>
            <li>
              <div
                className="logo-text"
                onClick={() => openLinks("mailto:tomisadone27@gmail.com")}
              >
                <img src={mailLogo} alt="" />
                <span>tomisadone27@gmail.com</span>
              </div>
            </li>
            <li>
              <div
                className="logo-text"
                onClick={() =>
                  openLinks(
                    "https://www.linkedin.com/in/tom%C3%A1s-sadone-235483181/"
                  )
                }
              >
                <img src={linkedinLogo} alt="Linkedin logo" />
                <span>Tomas Sadone</span>
              </div>
            </li>
            <li>
              <div
                className="logo-text"
                onClick={() => openLinks("https://github.com/TomasSadone")}
              >
                <img src={gitLogo} alt="github logo" />
                <span>Tomas Sadone</span>
              </div>
            </li>
          </ul>
        </StyledCard>
      </StyledContact>
    </StyledSection>
  );
};
