import React from "react";
import {
  Background,
  Intro,
  Title,
  StyledTextLoop,
  StyledPromotion,
} from "./styles";

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
      <div>
        The Yoga Palace is a community of creative minds and bhakti hearts who
        want to reach their highest potential through science based information
        integrated to their practice. The Yoga Palace is an unique living
        creative space in borned in the heart of Barcelona and founded by Dr. G
        who is a sports and holistic doctor, as well as a certified yoga and
        swimming teacher. And most of all Dr. G is a passionate yogi who wanted
        to create a safe and loving space, where creative minds with bhakti
        hearts convey a reliable medical source of information. As a sports
        specialist and having worked with many high performance international
        athletes, Dr.G realized that most of the teachings of yoga anatomy and
        neuroscience applied to yoga are not performed by experts in the field.
        If you are a curious mind who wants to learn about how to reach the
        highest potential of your body in a congruent, intuitive and down to
        earth way: Welcome to the Palace
        <button>Check out our Masterclasses!</button>
      </div>
    </>
  );
};
