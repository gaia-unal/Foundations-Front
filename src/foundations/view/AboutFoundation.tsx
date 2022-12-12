import React from "react";

const foundationInfo = {
  Nombre: "Fundación x",
  Identificacion: "123456789",
  Direccion: "Calle 123",
  Telefono: "123456789",
  Correo: "fundacionx@gmail.com",
  Descripcion: "Fundacion x es una fundacion que ayuda a los niños de la calle",
};

export const AboutFoundation = () => {
  return (
    <div className="w-full mt-6 bg-white">
      {Object.entries(foundationInfo).map(([key, value]) => (
        <div key={key} className="mb-2 flex flex-col">
          <h1 className="text-xl font-semibold">{key}</h1>
          <h1 className="pl-2">{value}</h1>
        </div>
      ))}
    </div>
  );
};
