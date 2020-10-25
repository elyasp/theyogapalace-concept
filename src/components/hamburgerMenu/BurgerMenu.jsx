import React from "react";
import { StyledMenu } from "./styles";
import { StyledLink } from "../header/styles";
import yogaLogo from "../../images/jivamukti-logo.svg";

export const BurgerMenu = ({ open }) => {
  return (
    <>
      <StyledMenu open={open}>
        <img src={yogaLogo} alt="jivamukti-logo.svg" />
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/programs">masterclass</StyledLink>
        <StyledLink to="/about">Palacesophy</StyledLink>
        <StyledLink to="/contact">APPLY NOW</StyledLink>
      </StyledMenu>
    </>
  );
};
