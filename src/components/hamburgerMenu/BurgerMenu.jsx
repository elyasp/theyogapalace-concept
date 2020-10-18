import React from "react";
import { StyledMenu } from "./styles";
import { NavLink } from "../header/styles";
import yogaLogo from "../../images/jivamukti-logo.svg";

export const BurgerMenu = ({ open }) => {
  return (
    <>
      <StyledMenu open={open}>
        <img src={yogaLogo} alt="jivamukti-logo.svg" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/programs">masterclass</NavLink>
        <NavLink to="/about">Palacesophy</NavLink>
        <NavLink to="/contact">APPLY NOW</NavLink>
      </StyledMenu>
    </>
  );
};
