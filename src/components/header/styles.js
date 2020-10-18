import styled from "styled-components";
import { Link } from "react-router-dom";
import { mediaUntil, mediaFrom } from "../../styles/styles";

export const Header = styled.header`
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  background: #d3dede;
  border-bottom: solid black 2px;
`;

export const Nav = styled.nav`
  width: 1100px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 2em;

  ${mediaUntil.md(`
    justify-content: flex-end;
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
  font-weight: 500;
  letter-spacing: 1.2px;
  margin: 15px;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  ${mediaUntil.md(`
    color: white;
  `)}

  &:hover {
    opacity: 1;
    /* text-decoration: underline; */
  }

  :last-child {
    font-weight: 600;
    border: solid black 1px;
    padding: 5px 10px;
    border-radius: 4px;

    ${mediaUntil.md(`
      border: solid white 2px;
  `)}

    &:hover {
      color: white;
      background-color: black;
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
