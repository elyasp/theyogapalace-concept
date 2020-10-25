import React from "react";
import Fade from "react-reveal/Fade";
import { MainPage } from "../components";

export const Landing = () => {
  return (
    <>
      <div>
        <Fade duration={2000}>
          <MainPage />
        </Fade>
      </div>
    </>
  );
};
