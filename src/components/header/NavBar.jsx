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
  // const [open, setOpen] = useState(false);
  // const node = useRef();
  // const [isScrolled, setIsScrolled] = useState(false);

  // const handleScroll = () => {
  //   if (window.pageYOffset > 5) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  // console.log(isScrolled);

  return (
    <>
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
              title="PAlace Dropdown"
              id="collasible-nav-dropdown"
            >
              <StyledDropdown.Item href="#action/3.1">
                Who is Dr. G?
              </StyledDropdown.Item>
              <StyledDropdown.Item href="#action/3.2">
                Our Palace
              </StyledDropdown.Item>
              <StyledDropdown.Item href="#action/3.3">
                Our Mission
              </StyledDropdown.Item>
              <StyledDropdown.Divider />
              <StyledDropdown.Item href="#action/3.4">
                <Link to="/contact">Apply Here</Link>
              </StyledDropdown.Item>
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
