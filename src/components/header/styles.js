import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { mediaUntil, BoldHeading } from "../../styles/styles";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Nav, Navbar } from "react-bootstrap";

const slideIn = keyframes`
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
  100% {
    transform:translateY(0rem);
    opacity: 1;
  }
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
`;

export const StyledNavbar = styled(Navbar)`
  background-color: white;
`;

export const Banner = styled.div`
  position: sticky;
  display: grid;
  place-items: center;
  background: black;
  color: white;
  height: 2em;
  letter-spacing: 0.7px;
  width: 100%;
  text-transform: uppercase;

  ${mediaUntil.md(`
     font-size: 0.6em;
  `)}
`;

export const StyledNav = styled(Nav)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  /* top: 10px; */

  ${mediaUntil.md(`
    display: block;
  `)}
`;

export const StyledDropdown = styled(NavDropdown)`
  width: fit-content;
  text-transform: uppercase;
  color: black;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1.2px;
  margin: 15px;
  transform: translateY(-100);
  transition: all 0.3s ease;

  div {
    animation-name: ${slideIn};
    animation-duration: 0.5s;
  }

  &:hover {
  }
`;

export const IconComponent = styled.div`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;

  ${mediaUntil.md(`
    display: none;
  `)}
`;

export const StyledLink = styled(Link)`
  width: fit-content;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: black;
  text-decoration-line: none;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1.2px;
  margin: 15px;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  &:hover {
    color: black;
    opacity: 1;
    border-bottom: solid 2px #005059;
    border-top: solid 2px #005059;
    text-decoration-line: none;
  }

  :last-child {
    font-weight: 600;
    border: solid #005059 2px;
    padding: 5px 10px;
    border-radius: 4px;

    ${mediaUntil.md(`
      border: solid white 2px;
  `)}

    &:hover {
      color: white;
      background-color: #005059;
      transition: background-color 0.5s ease;
    }
  }
`;

export const YogaLogo = styled.img`
  width: 4em;
`;

export const BurgerWrap = styled.div`
  ${mediaUntil.md(`
    display: block;
    `)}

  display: none;
  position: fixed;
  width: fit-content;
`;
