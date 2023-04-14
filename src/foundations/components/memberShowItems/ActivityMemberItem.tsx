import React from "react";
import { Activity } from "../../interface/activityInformation.interface";

export const ActivityMemberItem = ({
  type,
  experience,
  description,
}: Activity) => {
  return (
    <>
      <div className="text-teal-600">{type}</div>
      <div className="text-gray-500 text-xs">
        Años de experiencia: {experience}
      </div>
      {description && (
        <div className="text-center text-gray-400 w-3/4 text-xs">
          {description}
        </div>
      )}
    </>
  );
};
