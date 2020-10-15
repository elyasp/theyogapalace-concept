import styled from "styled-components";
import { media } from "../../styles/styles";

export const Header = styled.header`
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  text-align: center;
  padding: 0.3em 0;
  background-color: lightblue;
  font-size: 1em;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  border: solid 2px red;

  ${media.md(`
    flex-direction: column;
  `)}
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  border: solid 2px blue;
  padding: 0;
  max-width: 1100px;
`;

export const NavLink = styled.li`
  color: blue;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  padding: 15px;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  position: relative;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

export const YogaLogo = styled.img`
  width: 4em;
`;
