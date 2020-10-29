import styled from "styled-components";
import { Link } from "react-router-dom";
import waveUp from "../../images/waveDown.svg";
import { mediaUntil } from "../../styles/styles";

export const PageWrap = styled.main`
  background-color: antiquewhite;
`;

export const LightSection = styled.section`
  min-width: 70%;
  padding: 30px;
  height: ${(props) => props.height || "fit-content"};
  background-color: antiquewhite;
`;

export const DarkSection = styled.section`
  height: ${(props) => props.height || "fit-content"};
  min-width: 70%;
  padding: 30px;
  background-color: #202940;
  color: white;
`;

export const StyledHeader = styled.header`
  background-color: red;
  background: url(${waveUp});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  padding: 2em;
  width: 100%;
  height: 400px;
  color: white;

  ${mediaUntil.md(`
        padding: 1em;
  `)}

  h2 {
    margin-top: 2em;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const StyledPromo = styled(Link)`
  border-radius: 30px;
`;
