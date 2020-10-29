import styled from "styled-components";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import waveUp from "../../images/waveUp.svg";
import waveDown from "../../images/waveDown.svg";
import blob from "../../images/text-blob.svg";
import { mediaUntil, mediaFrom, LayeredBoxShadow } from "../../styles/styles";

export const StLandingSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${waveUp});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  background-color: #fff5f2;
  width: 100%;
  height: 55vh;
`;

export const Hero = styled.div`
  padding: 3em;
  ${mediaUntil.md(`
        
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-size: 1em;
`)}
  max-width: 70%;
  background-color: antiquewhite;
  /* border-radius: 3em; */

  h1 {
    font-weight: 900;
    font-family: "Raleway";
    font-size: 5em;
    color: white;

    span {
      :first-child {
        color: #00282b;
      }

      &:nth-child(2) {
        color: #005059;
      }

      :last-child {
        color: #08808e;
      }
    }
  }
`;

export const StIntroSection = styled.section`
  background-image: url(${waveDown});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  * {
    text-align: center;
  }
`;

export const StCopySection = styled.section`
  padding: 2em;
`;
export const StyledPromotion = styled.div`
  border-top: solid 2px black;
  padding: 1em;
  span {
    font-family: "Raleway";
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

export const StyledTextLoop = styled(TextLoop)`
  color: #005059;
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
  ${LayeredBoxShadow}
  border-radius: 10px;
  padding: 1em;
  margin: 2em;
  background: #943c29;
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
    background: #662a1d;
    transition: all 0.2s ease;
    text-decoration: none;
    color: white;
  }
`;

export const PageImage = styled.img`
  max-height: 550px;

  ${mediaUntil.md(`
  max-height: 300px;
  `)}
`;

export const BlobParagraph = styled.div`
  /* background-image: url(${blob}); */
  background-color: #202940;
  color: white;
  padding: 4rem 1rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
