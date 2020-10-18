import React from "react";

import {
  Background,
  Intro,
  Title,
  StyledTextLoop,
  StyledPromotion,
  DescriptionComponent,
  SaleLink,
} from "./styles";
import responsiveLandingImage from "../../images/responsive-lotus.jpg";
import snakeEye from "../../images/jivamukti-logo.svg";

export const MainPage = () => {
  return (
    <>
      <Background>
        <Intro>
          <h1>The Yoga Palace</h1>
          <StyledPromotion>
            <span>for yoga teachers who want to </span>
            <StyledTextLoop
              springConfig={{ stiffness: 60, damping: 14 }}
              adjustingSpeed={1100}
            >
              <span>boost their students' body awareness</span>
              <span>safely take students to more advanced asanas</span>
              <span>unleash their creativity in asana sequencing</span>
              <span>manage injuries & special needs professionally</span>
              <span>be a community ambassador for a safe yoga practise</span>
            </StyledTextLoop>
          </StyledPromotion>
        </Intro>
      </Background>
      <DescriptionComponent>
        <img src={snakeEye} alt="snake-meditation-logo" />
        <div>
          <p>
            The Yoga Palace, a community of creative minds and bhakti hearts who
            want to reach their highest potential through science-based
            information integrated to their practice.
            <br />
            <br />
            Founded by Dr. G, who is a sports and holistic doctor, as well as a
            certified yoga and swimming teacher, the Yoga Palace is a unique
            living creative space in born in the heart of Barcelona. Dr. G is a
            passionate yogi who wanted to create a safe and loving space, where
            creative minds with bhakti hearts benefit from a reliable medical
            source of information.
            <br />
            <br />
            As a sports specialist and having worked with many high performance
            international athletes, Dr. G realized that most of the teachings of
            yoga anatomy and neuroscience applied to yoga are not performed by
            experts in the field. If you are a curious mind who wants to learn
            about how to reach the highest potential of your body in a
            congruent, intuitive and down to earth way:
          </p>
          <br />

          <h1>Welcome to the Palace</h1>
          <br />

          <SaleLink to="programs">Check out our Masterclasses!</SaleLink>
        </div>
      </DescriptionComponent>
    </>
  );
};
