import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { mediaUntil, mediaFrom } from "../../styles/styles";

const navbarAnimation = keyframes`
  0% {
      top: -30px;
  }
  50% {
      top: -15px;
  }
  100% {
      top: 0px;
  }
`;

export const Header = styled.header`
  border: solid 3px blue;
  ${({ isScrolled }) =>
    isScrolled &&
    css`
      animation: 0.3s ${navbarAnimation} ease;
    `}

  background-color: ${({ isScrolled }) =>
    isScrolled ? "rgba(2, 0, 102, 0.7)" : "hsla(27, 100%, 1%, 0.45)"};
  /* position: ${({ isScrolled }) => (isScrolled ? "fixed" : "absolute")}; */

  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 2;
  background: white;
  border-bottom: solid black 2px;
`;

export const Nav = styled.nav`
  border: solid 3px red;
  width: 1000px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 2em;

  ${mediaUntil.md(`
    justify-content: space-between;
    width: -webkit-fill-available;
  `)}
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

export const NavLink = styled(Link)`
  width: fit-content;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: black;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1.2px;
  margin: 15px;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  ${mediaUntil.md(`
    color: white;
  `)}

  &:hover {
    opacity: 1;
    border-bottom: solid 2px #1793ff;
    border-top: solid 2px #1793ff;
    /* transition: all 1s ease; */
  }

  :last-child {
    font-weight: 600;
    border: solid #1793ff 1px;
    padding: 5px 10px;
    border-radius: 4px;

    ${mediaUntil.md(`
      border: solid white 2px;
  `)}

    &:hover {
      color: white;
      background-color: #1793ff;
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

export const Banner = styled.div`
  display: grid;
  place-items: center;
  background: black;
  color: white;
  height: 2em;
  letter-spacing: 0.7px;
  width: 100%;
`;
