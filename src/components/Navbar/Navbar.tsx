import React, { RefObject, useEffect, useRef, useState } from "react";
import { HamburguerMenu } from "../../styledComponents/HamburguerMenu";
import { StyledButton } from "../../styledComponents/StyledButton";
// import { ResumeButton as Button } from "../button/StyledButton";
import { StyledNavbar } from "./StyledNavbar";

type Props = {
  sections: RefObject<HTMLDivElement>[];
};

export const Navbar: React.FC<Props> = ({ sections }) => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const toggleNav = () => setOpenMobileNav(!openMobileNav);
  const handleClick = (ref: RefObject<HTMLDivElement>) => {
    setOpenMobileNav(false);
    ref.current?.scrollIntoView();
    console.log(ref.current);
  };

  const [activeSection, setActiveSection] = useState<string | undefined>("");
  // useEffect(() => {
  //   if (activeSection === "work") {
  //     return workRef.current?.focus();
  //   }
  //   if (activeSection === "about") {
  //     return aboutRef.current?.focus();
  //   } else {
  //     // console.log("asd");
  //     workRef.current?.blur();
  //   }
  // }, [activeSection]);
  const workRef = useRef<HTMLButtonElement>(null);
  const aboutRef = useRef<HTMLButtonElement>(null);

  //añadir el removedor de eventlistener
  //hacer que si offsetbottom o algo asi = 0 haga focus en la ultima seccion
  //y algo con la altura de la seccion misma para sacar el focus cuando te vas
  //pq no va a cambiar el state.
  //lo de la altura verlo en el video del loco.

  useEffect(() => {
    const firstSectionOffset = sections[0].current?.offsetTop;
    window.addEventListener("scroll", () => {
      sections.forEach((ref) => {
        const sectionTop = ref.current?.offsetTop || {};
        if (firstSectionOffset && scrollY < firstSectionOffset) {
          setActiveSection("");
        }
        if (scrollY >= sectionTop) {
          setActiveSection(ref.current?.id);
        }
      });
    });
  }, []);

  return (
    <StyledNavbar>
      <div>
        <h3>Tomas Sadone</h3>
        <HamburguerMenu
          onClick={toggleNav}
          open={openMobileNav}
          className="hamburguer"
        >
          <span />
        </HamburguerMenu>
        <div className={`navigation ${openMobileNav}`}>
          <button
            className={activeSection === "work" ? "active" : ""}
            ref={workRef}
            onClick={() => handleClick(sections[0])}
          >
            WORK
          </button>
          <button className={activeSection === "about" ? "active" : ""}  ref={aboutRef} onClick={() => handleClick(sections[1])}>
            ABOUT
          </button>
          <button>CONTACT</button>
          <StyledButton
            className="styled-button"
            background="1a1a1a"
            padding="0.875em"
          >
            RESUME
          </StyledButton>
        </div>
      </div>
    </StyledNavbar>
  );
};
