import styled from "styled-components";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import waveUp from "../../images/yoga.svg";
import waveDown from "../../images/yogaUnder.svg";
import responsiveLandingImage from "../../images/responsive-lotus.jpg";
import { mediaUntil, mediaFrom, LayeredBoxShadow } from "../../styles/styles";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${waveUp});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #005059;
  width: 100%;
  height: 70vh;

  /* box-shadow: 152px 12px 167px -46px rgba(0, 25, 28, 0.1) inset; */

  /* ${mediaUntil.lg(`
    background-image: url(${responsiveLandingImage});
    box-shadow: 7px 77px 164px -47px rgba(5, 54, 60, 0.1) inset;

  `)} */
`;

export const Intro = styled.div`
  ${mediaUntil.md(`
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
`)}
  /* padding: 1em; */
  /* width: 65vw; */

  h1 {
    font-weight: 600;
    color: #fe9a84;

    ${mediaFrom.md(`
        font-size: 5em;
    `)};
  }
`;

export const StyledContainer = styled.section`
  background-image: url(${waveDown});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const StyledTextLoop = styled(TextLoop)`
  color: #fe9a84;
`;

export const StyledPromotion = styled.div`
  span {
    :first-child {
      font-weight: 500;
    }
    font-size: 1em;
  }

  ${mediaUntil.md(`
display: grid;
place-items: center;
`)}
`;

export const DescriptionComponent = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 10vh 6%;
  margin-bottom: 10vh;

  ${mediaUntil.md(`
  flex-direction: column;
   img {
      width: fit-content;
  }
  `)}

  img {
    width: 400px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;
    padding: 1em;
    font-weight: 300;
    margin: 0 auto;
    text-align: center;

    h1 {
      font-weight: 200;
      font-size: 2.3em;
      font-style: italic;
    }

    ${mediaUntil.md(`
      width: 100%;
      margin: 0;
    `)};
  }
`;

export const SaleLink = styled(Link)`
  padding: 1em 2em;
  background: #00a6ff;
  width: fit-content;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.3em;
  letter-spacing: 1.2px;

  &:hover {
    background: #0064de;
    transition: all 0.5s ease;
  }
`;

export const PageImage = styled.img`
  max-height: 700px;
`;
