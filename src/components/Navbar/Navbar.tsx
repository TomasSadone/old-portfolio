import React, { useState } from "react";
import { HamburguerMenu } from "../../styledComponents/HamburguerMenu";
import { StyledButton } from "../../styledComponents/StyledButton";
// import { ResumeButton as Button } from "../button/StyledButton";
import { StyledNavbar } from "./StyledNavbar";

export const Navbar: React.FC = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const toggleNav = () => setOpenMobileNav(!openMobileNav);

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
            <button>WORK</button>
            <button>ABOUT</button>
            <button>CONTACT</button>
            <StyledButton
              className="styled-button"
              background="#1A1A1A"
              padding="0.875em"
            >
              RESUME
            </StyledButton>
          </div>
        </div>
      </StyledNavbar>
  );
};
