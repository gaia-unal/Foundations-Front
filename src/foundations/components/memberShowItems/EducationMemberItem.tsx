import React from "react";
import { Education } from "../../interface/educationInformation.interface";

export const EducationMemberItem = ({
  level,
  title,
  institution,
  startDate,
  endDate,
  completed,
}: Education) => {
  return (
    <>
      <div className="text-teal-600">{title}</div>
      <div className="text-gray-500 text-xs">Nivel: {level}</div>
      <div className="text-gray-500 text-xs">Institución: {institution}</div>
      <div className="text-gray-400 text-xs">
        {completed ? startDate + "-" + endDate : startDate + "-Actualidad"}
      </div>
    </>
  );
};
