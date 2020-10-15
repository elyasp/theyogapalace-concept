import React from "react";
import { Link } from "react-router-dom";
import { Header, Nav, NavList, NavLink, YogaLogo } from "./styles";
import yogaLogo from "../../images/jivamukti-logo.svg";

export const NavBar = () => {
  return (
    <>
      <Header>TRAINING PLATFORM COMING SOON!</Header>
      <Nav>
        <YogaLogo src={yogaLogo} alt="jivamukti-logo.svg" />
        <NavList>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/programs">Programs</Link>
          </NavLink>
          <NavLink>
            <Link to="/about">About</Link>
          </NavLink>
          <NavLink>
            <Link to="/contact">APPLY</Link>
          </NavLink>
        </NavList>
      </Nav>
    </>
  );
};
