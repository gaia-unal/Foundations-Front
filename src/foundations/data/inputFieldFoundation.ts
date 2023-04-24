import { InputText } from "../../common/interfaces/inputText.interface";

export const textFieldsNewFoundation: InputText[] = [
  {
    name: "identification",
    type: "text",
    label: "Identificación",
    placeholder: "Identificación",
  },
  {
    name: "name",
    type: "text",
    label: "Nombre",
    placeholder: "Nombre de la fundación",
  },
  {
    name: "adminEmail",
    type: "email",
    label: "Email de administrador",
    placeholder: "admin@example.com",
  },
  {
    name: "address",
    type: "text",
    label: "Dirección",
    placeholder: "Dirección de la fundación",
  },
  {
    name: "phone",
    type: "text",
    label: "Teléfono",
    placeholder: "Teléfono de la fundación",
  },
  {
    name: "email",
    type: "email",
    label: "E-mail",
    placeholder: "E-mail de la fundación",
  },
];
