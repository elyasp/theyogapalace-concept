import React from "react";
import doctorPhoto from "../../images/Dr-Gonzalo-2.jpg";
import { StyledPortrait } from "./styles";
export const Profile = () => {
  return (
    <div>
      <StyledPortrait src={doctorPhoto} alt="Dr. Gonzalo" />
    </div>
  );
};
