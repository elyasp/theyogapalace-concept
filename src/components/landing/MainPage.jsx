import React from "react";
import {
  StLandingSection,
  Hero,
  StyledTextLoop,
  StyledPromotion,
  SaleLink,
  PageImage,
  StIntroSection,
  StCopySection,
} from "./styles";
import snakeEye from "../../images/jivamukti-logo.svg";
import { Container, Row, Col } from "react-bootstrap";

export const MainPage = () => {
  return (
    <>
      <StLandingSection>
        <Hero>
          <h1>
            <span>THE YOG</span>
            <span>A PAL</span>
            <span>ACE</span>
          </h1>

          <StyledPromotion>
            <span>For yoga teachers who want to </span>
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
        </Hero>
      </StLandingSection>
      <StIntroSection>
        <Container>
          <Row>
            <Col md={true}>
              <PageImage src={snakeEye} alt="snake-meditation-logo" />
            </Col>
            <Col md={true}>
              <div>
                <p>
                  The Yoga Palace, a community of creative minds and bhakti
                  hearts who want to reach their highest potential through
                  science-based information integrated to their practice.
                  <br />
                  <br />
                  Founded by Dr. G, who is a sports and holistic doctor, as well
                  as a certified yoga and swimming teacher, the Yoga Palace is a
                  unique living creative space in born in the heart of
                  Barcelona. Dr. G is a passionate yogi who wanted to create a
                  safe and loving space, where creative minds with bhakti hearts
                  benefit from a reliable medical source of information.
                  <br />
                  <br />
                  As a sports specialist and having worked with many high
                  performance international athletes, Dr. G realized that most
                  of the teachings of yoga anatomy and neuroscience applied to
                  yoga are not performed by experts in the field. If you are a
                  curious mind who wants to learn about how to reach the highest
                  potential of your body in a congruent, intuitive and down to
                  earth way:
                </p>
                <br />

                <h1>Welcome to the Palace</h1>
                <br />
                <SaleLink to="programs">Check out our Masterclasses!</SaleLink>
              </div>
            </Col>
          </Row>
        </Container>
      </StIntroSection>
      <StCopySection>
        <Container>
          <Row>
            <Col>
              <h1>sample text and testimonials</h1>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col md={true}>
              TESTIMONIAL 1, Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatibus minima quae sapiente reiciendis maiores commodi
              ex modi, odio molestiae esse corrupti provident illum aliquam
              repudiandae ad nulla nam velit distinctio?
            </Col>
            <Col md={true}>
              TEstimonial two, Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatibus minima quae sapiente reiciendis
              maiores commodi ex modi, odio molestiae esse corrupti provident
              illum aliquam repudiandae ad nulla nam velit distinctio?
            </Col>
            <Col md={true}>
              testimonial three , Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatibus minima quae sapiente reiciendis
              maiores commodi ex modi, odio molestiae esse corrupti provident
              illum aliquam repudiandae ad nulla nam velit distinctio?
            </Col>
          </Row>
        </Container>
      </StCopySection>
    </>
  );
};
