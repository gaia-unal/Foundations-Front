import { FunctionComponent } from "react";
import { Activity } from "../interface/activityInformation.interface";
import { Education } from "../interface/educationInformation.interface";
import { Family } from "../interface/familyInformation.interface";
interface ReviewItemProps {
  values: Education[] | Family[] | Activity[];
  title: string;
}

const keysTranslate = {
  level: "Nivel",
  institution: "Institución",
  title: "Titulo",
  startDate: "Fecha de inicio",
  endDate: "Fecha de finalización",
  relation: "Parentesco",
  name: "Nombre",
  lastName: "Apellido",
  identification: "Identificación",
  birthDate: "Fecha de nacimiento",
  type: "Tipo de actividad",
  description: "Descripción",
  experience: "Años de experiencia",
};

export const ReviewItem: FunctionComponent<ReviewItemProps> = ({
  values,
  title,
}) => {
  return (
    <>
      {values.map((value, index) => (
        <>
          <h1 className="text-xl font-semibold mt-1">
            {title} {index + 1}
          </h1>
          <div
            key={index}
            className="mb-2 w-full mt-2 bg-white grid grid-cols-2"
          >
            {Object.entries(value).map(([key, value]) => (
              <div key={key} className="mb-2 flex flex-col">
                <h1 className="text-base font-semibold">
                  {keysTranslate[key as keyof typeof keysTranslate]}
                </h1>
                <h1 className="pl-2 text-sm">{value}</h1>
              </div>
            ))}
          </div>
        </>
      ))}
    </>
  );
};
