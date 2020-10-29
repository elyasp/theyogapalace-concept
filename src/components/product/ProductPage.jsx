import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  StyledHeader,
  StyledPromo,
  PageWrap,
  LightSection,
  DarkSection,
} from "./styles";

export const ProductPage = () => {
  return (
    <>
      <PageWrap>
        <StyledHeader>
          <Container>
            <Row>
              <Col>
                <h2>Mentoring series by Dr. G</h2>
                <h4>STEP UP YOUR ASANA's AND GUIDE WITH CONFIDENCE</h4>
                <span>
                  A 6-Week Long Mentoring Program for Yoga Teachers and curious
                  minds led by Gonzalo Santellan, MD, Sports Doctor and Yoga
                  Teacher
                </span>
              </Col>
            </Row>
          </Container>
        </StyledHeader>

        <Container>
          <StyledPromo>I want more info!</StyledPromo>
          <Row>
            <Col>
              <h5>
                Become empowered to create a clear and science-based rounded
                yoga practice and teaching, in a medically-safe environment
                Empowering students and teacher to explore a new authentic
                dimension of their yoga practice with a safely and creatively
                science-based method
              </h5>
              <p>
                Maximize and optimize your teaching skills. Unique muscle based
                sequencing method. Relevant anatomy analysis designed for Yoga
                teachers Practical and simple to apply Focused on muscles,
                joints, movement and injury prevention in Yoga Designed and
                Taught by Dr. Gonzalo Santellan, MD and Sport Medicine 6 modules
                and 24 lectures 25+ hours of study Adaptability: study when it
                suits you.
              </p>
            </Col>
          </Row>
        </Container>
        <LightSection height="70vh">
          <Container>
            <Row>
              <Col>
                <h3>A Program Created By Us for YOU</h3>
                <ul>
                  <li>Yoga teachers</li>
                  <li>Yoga practitioners</li>
                  <li>Dancers</li>
                  <li>Coaches</li>
                  <li>
                    Curious minds willing to learn about the body function
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </LightSection>
        <DarkSection height="70vh">
          <Container>
            <Row>
              <Col>
                <h3>About the Masterclass</h3>
                We have designed an interactive, user friendly and thought
                provoking workbook to help you process and integrate the
                lectures:
                <ul>
                  <li>Visual Asana based exercises</li>
                  <li>In-class tools and suggestions</li>
                  <li>Case Studies to provoke critical thinking</li>
                  <li>Challenging quizzes</li>
                  <li>Online support</li>
                  <li>
                    A final assessment you can complete (optional) to get a
                    Certificate of Competency (optional)
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </DarkSection>

        <LightSection>
          <Container>
            <Row>
              <Col>
                <h2>The course</h2>
                <p>
                  PLACES AVAILABLE Only a limited number of pre-selected
                  teachers per course. . Dr. G will select the best candidates
                  for each mentoring group. LIVE MENTORING TIMES &amp; DAYS
                  Every Wednesday from 19:00 - 20:00pm (BARCELONA TIME). WHAT
                  DOES WHATSAPP/FACEBOOK GROUP SUPPORT INCLUDE? Between the
                  online sessions, you will be able to ask Dr. G questions by
                  WhatsApp group with your colleagues. This is a great
                  opportunity to speed up your learning process and to ask
                  doubts that might be shared for the rest of the group. If any
                  questions which are complicated and require a lot of
                  explanation Dr. G will kindly ask you to write it down for the
                  online session. MASTER CLAS INVESTMENT: 6 LIVE MENTORING
                  SESSIONS + 6 ON-LINE MODULES + WORKBOOK: $550 Full payment is
                  upfront, at least 48 hours before the start of the first
                  session. WHAT IS THE PROCESS? Once you have been accepted into
                  the Master Class Program (please apply below), we will email
                  you to set up the dates and times and give you the necessary
                  information to pay via bank transfer or PayPal.
                </p>
              </Col>
            </Row>
          </Container>
        </LightSection>
        <DarkSection>
          <Container>
            <Row>
              <Col>
                <h3>What Do You Get When You Enroll?</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>Get Mentored</h5>Kick off begins on DATE with a LIVE welcome
                and training from Dr. G. You will have 6 additional live group
                coaching sessions with Mel throughout the course where you can
                ask questions and get live feedback.
              </Col>
              <Col>
                <h5>Get Clarity</h5>
                Self-pased on-line lecture with an associated workbook and live
                trainings with Dr. G Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Ipsum fugiat autem porro veritatis? Aliquam
                itaque explicabo et quo consequatur assumenda quibusdam, vel
                velit ipsam eum officiis unde a minima dolorem?
              </Col>
              <Col>
                <h5>Get Welcomed</h5>A loving community that will remain with
                you always Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Natus quisquam ullam totam provident mollitia corporis
                odio libero in eveniet consequuntur vitae eos, dolor doloribus
                reiciendis recusandae deleniti deserunt nesciunt adipisci?
              </Col>
            </Row>
          </Container>
        </DarkSection>
        <LightSection>
          <Container>
            <Row>
              <h2>Who Is Your Teacher ?</h2>
            </Row>
            <Row>
              <Col>
                Gonzalo Santellan, MD. He is known as Dr. G, is a General
                Practitioner (GP) and a Sports Medicine Doctor. He is a Yoga
                Teacher and a Swimming Coach. Over the past 10 years, he has
                been exploring different health disciplines in his practice,
                becoming a leader in holistic medicine in Spain. He has worked
                with professional Olympics athletes, IRON MAN triathlon teams
                and Yoga Teachers for the past 9 years. Having developed a vast
                knowledge about anatomy, physiology and Neuroscience.
              </Col>
            </Row>
          </Container>
        </LightSection>
      </PageWrap>
    </>
  );
};
