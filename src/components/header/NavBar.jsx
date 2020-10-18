import React, { useState, useRef, useEffect } from "react";
import { BurgerButton, BurgerMenu } from "../hamburgerMenu";
import { Link } from "react-router-dom";
import {
  Header,
  Nav,
  NavList,
  NavLink,
  YogaLogo,
  IconComponent,
  BurgerWrap,
  Banner,
} from "./styles";
import yogaLogo from "../../images/openeyecon.svg";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 5) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  console.log(isScrolled);

  return (
    <>
      <Header isScrolled={isScrolled}>
        <Banner>TRAINING PLATFORM COMING SOON!</Banner>
        <BurgerMenu ref={node} open={open} setOpen={setOpen} />
        <Nav>
          {/* <BurgerWrap > */}
          <div>
            <BurgerButton ref={node} open={open} setOpen={setOpen} />
            {/* </BurgerWrap> */}
            <Link to="/">
              <IconComponent>
                <YogaLogo src={yogaLogo} alt="jivamukti-logo.svg" />
                {/* <span>The Yoga Palace</span> */}
              </IconComponent>
            </Link>
          </div>
          <NavList>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/programs">masterclass</NavLink>
            <NavLink to="/about">Palacesophy</NavLink>
            <NavLink to="/contact">APPLY NOW</NavLink>
          </NavList>
        </Nav>
      </Header>
    </>
  );
};
