import React, { useEffect, useRef, useState } from "react";
import { About } from "./components/About/About";
import { MainPage } from "./components/MainPage/MainPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Work } from "./components/Work/Work";
import { Container } from "./styledComponents/Container";
import { GlobalStyle } from "./styledComponents/GlobalStyle";
import { Contact } from "./components/Contact/Contact";

// type Props = {any}

export const App: React.FC = () => {
  const workPageRef = useRef<HTMLDivElement>(null);
  const aboutPageRef = useRef<HTMLDivElement>(null);
  const contactPageRef = useRef<HTMLDivElement>(null);
  const refs = [workPageRef, aboutPageRef, contactPageRef];
  // const navbarRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <GlobalStyle />
      <Navbar sections={refs} />
      <Container>
        <MainPage />
        <div className="scroll" id="work" ref={workPageRef}>
          <Work />
        </div>
        <div className="scroll" id="about" ref={aboutPageRef}>
          <About />
        </div>
        <div className="scroll" id="contact" ref={contactPageRef}>
          <Contact />
        </div>
      </Container>
    </>
  );
};
