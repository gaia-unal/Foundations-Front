import { ReviewItem } from "../components/ReviewItem";
import { member } from "../interface/member.interface";
const keysTranslate = {
  name: "Nombre",
  lastName: "Apellido",
  identification: "Identificación",
  address: "Dirección",
  phone: "Teléfono",
  email: "Correo electrónico",
  birthDate: "Fecha de nacimiento",
  education: "Estudio",
  family: "Familia",
  activity: "Actividad comercial",
};

export const ReviewNewMember = ({ values }: { values: member }) => {
  return (
    <>
      <div className="w-full mt-6 bg-white">
        <h1 className="text-xl font-semibold border-b-2">
          Informacion personal
        </h1>
        <div className="grid grid-cols-2">
          {Object.entries(values).map(([key, value]) =>
            key !== "education" && key !== "family" && key !== "activity" ? (
              <div key={key} className="mb-2 flex flex-col">
                <h1 className="text-lg font-semibold">
                  {keysTranslate[key as keyof typeof keysTranslate]}
                </h1>
                <h1 className="pl-2">{value}</h1>
              </div>
            ) : (
              <div key={key} className="col-span-2 mt-8">
                <h1 className="text-xl font-semibold border-b-2">
                  {keysTranslate[key as keyof typeof keysTranslate]}
                </h1>
                <ReviewItem
                  title={keysTranslate[key as keyof typeof keysTranslate]}
                  values={value}
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
