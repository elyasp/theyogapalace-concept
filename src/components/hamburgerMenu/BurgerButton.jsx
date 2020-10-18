import React from "react";
import { StyledBurger } from "./styles";

export const BurgerButton = ({ open, setOpen }) => {
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </StyledBurger>
    </>
  );
};
