import React, { useState, useRef, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BurgerButton, BurgerMenu } from "../hamburgerMenu";
import { Link } from "react-router-dom";
import {
  Header,
  NavList,
  StyledLink,
  YogaLogo,
  IconComponent,
  BurgerWrap,
  Banner,
  StyledDropdown,
  StyledNav,
} from "./styles";
import yogaLogo from "../../images/openeyecon.svg";

export const NavBar = () => {
  return (
    <>
      <Banner>under construction | Something BIG is coming very soon</Banner>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Link to="/">
          <IconComponent>
            <YogaLogo src={yogaLogo} alt="jivamukti-logo.svg" />
          </IconComponent>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <StyledNav className="mr-auto">
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/programs">TYP Mentoring Series</StyledLink>
            <StyledLink to="/about">Palacesophy</StyledLink>
            <StyledDropdown
              title="Our Palacesophy"
              id="collasible-nav-dropdown"
            >
              <div>
                <StyledDropdown.Item href="/about">
                  Who is Dr. G?
                </StyledDropdown.Item>
                <StyledDropdown.Item href="/#action/3.3">
                  Our Palace
                </StyledDropdown.Item>
                <StyledDropdown.Item href="#action/3.3">
                  Our Mission
                </StyledDropdown.Item>
                <StyledDropdown.Divider />
                <StyledDropdown.Item href="#action/3.4">
                  <Link to="/contact">Apply Here</Link>
                </StyledDropdown.Item>
              </div>
            </StyledDropdown>
            <StyledLink to="/contact">APPLY NOW</StyledLink>
          </StyledNav>
        </Navbar.Collapse>
      </Navbar>

      {/* <Header isScrolled={isScrolled}>
        <Banner>TRAINING PLATFORM COMING SOON!</Banner>
        <BurgerMenu ref={node} open={open} setOpen={setOpen} />
        <Nav>
          <div>
            <BurgerButton ref={node} open={open} setOpen={setOpen} />

            <Link to="/">
              <IconComponent>
                <YogaLogo src={yogaLogo} alt="jivamukti-logo.svg" />
              </IconComponent>
            </Link>
          </div>
         
        </Nav>
      </Header> */}
    </>
  );
};
