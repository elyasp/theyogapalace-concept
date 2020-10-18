import styled from "styled-components";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import landingImage from "../../images/landingimage.jpg";
import responsiveLandingImage from "../../images/responsive-lotus.jpg";
import { mediaUntil, mediaFrom, LayeredBoxShadow } from "../../styles/styles";

export const Background = styled.div`
  display: grid;
  place-items: center;
  background-image: url(${landingImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #e7edf3;
  width: 100%;
  height: 400px;

  box-shadow: 152px 12px 167px -46px rgba(0, 25, 28, 0.1) inset;

  ${mediaUntil.lg(`
    background-image: url(${responsiveLandingImage});
    box-shadow: 7px 77px 164px -47px rgba(5, 54, 60, 0.1) inset;

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
    font-weight: 600;
    color: black;

    ${mediaFrom.md(`
        font-size: 5em;
    `)};
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
