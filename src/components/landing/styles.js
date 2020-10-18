import styled from "styled-components";
import TextLoop from "react-text-loop";
import landingImage from "../../images/landingimage.jpg";
import responsiveLandingImage from "../../images/responsive-lotus.jpg";
import { mediaUntil, mediaFrom, LayeredBoxShadow } from "../../styles/styles";

export const Background = styled.div`
  display: grid;
  place-items: center;
  background-image: url(${landingImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #eaf1f1;
  width: 100%;
  height: 100vh;
  box-shadow: 152px 12px 167px -46px rgba(0, 25, 28, 0.4) inset;

  ${mediaUntil.lg(`
    background-image: url(${responsiveLandingImage});
    box-shadow: 7px 77px 164px -47px rgba(5, 54, 60, 0.4) inset;

  `)}
`;

export const Intro = styled.div`
  ${mediaUntil.md(`
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
`)}
  padding: 1em;
  width: 65vw;

  h1 {
    font-weight: 200;

    ${mediaFrom.md(`
        font-size: 5em;
    `)}
  }
`;

export const StyledTextLoop = styled(TextLoop)``;

export const StyledPromotion = styled.div`
  span {
    :first-child {
      font-weight: 300;
    }
    font-size: 1em;
  }

  ${mediaUntil.md(`
display: grid;
place-items: center;
`)}
`;
