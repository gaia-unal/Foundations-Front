import { InputText } from "../interface/inputText.interface";

export const FieldsLogin: InputText[] = [
  {
    name: "email",
    label: "Correo electrónico",
    type: "email",
    placeholder: "email@example.com",
  },
  {
    name: "password",
    label: "Contraseña",
    type: "password",
    placeholder: "********",
  },
];

export const FieldsRegister: InputText[] = [
  {
    name: "displayName",
    label: "Nombre de usuario",
    type: "text",
    placeholder: "Usuario",
  },
  {
    name: "email",
    label: "Correo electrónico",
    type: "email",
    placeholder: "email@example.com",
  },
  {
    name: "password",
    label: "Contraseña",
    type: "password",
    placeholder: "********",
  },
  {
    name: "validatePassword",
    label: "Confirmar contraseña",
    type: "password",
    placeholder: "********",
  },
];
export const FieldsResetPassword: InputText[] = [
  {
    name: "email",
    label: "Ingresar correo electrónico",
    type: "email",
    placeholder: "email@example.com",
  },
];
