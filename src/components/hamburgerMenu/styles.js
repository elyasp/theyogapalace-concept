import styled from "styled-components";
import { mediaUntil } from "../../styles/styles";

export const StyledMenu = styled.nav`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 70vw;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.6s ease-in-out;

  ${mediaUntil.md(`
    width: 100vw;
  `)}

  img {
    height: 200px;
  }
`;

export const StyledBurger = styled.button`
  ${mediaUntil.md(`
  visibility: initial;
    `)}

  visibility: hidden;
  position: fixed;
  width: fit-content;

  /* position: relative;
  top: 2em;
  left: 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  width: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "white" : "black")};
    border-radius: 2px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
