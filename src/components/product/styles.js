import styled from "styled-components";
import { Link } from "react-router-dom";
import waveUp from "../../images/waveDown.svg";
import { mediaUntil, BoldHeading } from "../../styles/styles";

export const PageWrap = styled.main`
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const LightSection = styled.section`
  min-width: 70%;
  padding: 30px;
  height: ${(props) => props.height || "fit-content"};
  /* background-color: antiquewhite; */
`;

export const DarkSection = styled.section`
  height: ${(props) => props.height || "fit-content"};
  min-width: 70%;
  padding: 30px;
  background-color: #202940;
  color: white;
`;

export const StyledHeader = styled.header`
  background: url(${waveUp});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: fit-content;
  color: white;

  ${mediaUntil.md(`
      padding: 1em;
  `)}

  h2 {
    font-size: 4rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;

    ${mediaUntil.md(`
     font-size: 1rem;
  `)}
  }

  div {
    display: grid;
    background-color: #202940;
    place-items: center;
    padding: 2rem;

    ${mediaUntil.md(`
     padding: 1rem;
  `)}
  }
`;

export const StyledPromo = styled(Link)`
  border-radius: 30px;
`;
