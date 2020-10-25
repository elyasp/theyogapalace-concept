import styled from "styled-components";
import waveUp from "../../images/waveDown.svg";
import { mediaUntil } from "../../styles/styles";

export const StyledHeader = styled.header`
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
