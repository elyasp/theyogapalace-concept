import React, { useState, useRef } from "react";
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
} from "./styles";
import yogaLogo from "../../images/openeyecon.svg";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  return (
    <>
      <Header>
        {/* <div>TRAINING PLATFORM COMING SOON!</div> */}
        <Nav>
          <BurgerWrap ref={node}>
            <BurgerButton open={open} setOpen={setOpen} />
            <BurgerMenu open={open} setOpen={setOpen} />
          </BurgerWrap>
          <Link to="/">
            <IconComponent>
              <YogaLogo src={yogaLogo} alt="jivamukti-logo.svg" />
              {/* <span>The Yoga Palace</span> */}
            </IconComponent>
          </Link>
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
