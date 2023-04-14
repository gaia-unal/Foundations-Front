import { InputText } from "../../common/interfaces/inputText.interface";

export const fieldsBasicInformation: InputText[] = [
  {
    name: "name",
    type: "text",
    label: "Nombre",
    placeholder: "Nombre",
  },
  {
    name: "lastName",
    type: "text",
    label: "Apellido",
    placeholder: "Apellido",
  },
  {
    name: "identification",
    type: "text",
    label: "Identificación",
    placeholder: "Identificación",
  },
  {
    name: "address",
    type: "text",
    label: "Dirección",
    placeholder: "Dirección",
  },
  {
    name: "phone",
    type: "text",
    label: "Teléfono",
    placeholder: "Teléfono",
  },
  {
    name: "email",
    type: "email",
    label: "Correo electrónico",
    placeholder: "E-mail",
  },
  {
    name: "birthDate",
    type: "date",
    label: "Fecha de nacimiento",
    placeholder: "Fecha de nacimiento",
  },
];

export const fieldsEducation: InputText[] = [
  {
    name: "level",
    type: "text",
    label: "Nivel de estudio",
    placeholder: "ej. Secundaria, Técnico, Universitario, etc.",
  },
  {
    name: "title",
    type: "text",
    label: "Título",
    placeholder: "Título obtenido",
  },
  {
    name: "institution",
    type: "text",
    label: "Institución",
    placeholder: "Institución donde se obtuvo el título",
  },
  {
    name: "startDate",
    type: "date",
    label: "Fecha de inicio",
    placeholder: "Fecha de inicio",
  },
  {
    name: "endDate",
    type: "date",
    label: "Fecha de finalización",
    placeholder: "Fecha de finalización",
  },
];

export const fieldsFamily: InputText[] = [
  {
    name: "relation",
    type: "text",
    label: "Parentesco",
    placeholder: "Esposa, Hijo, Padre, etc.",
  },
  {
    name: "name",
    type: "text",
    label: "Nombre",
    placeholder: "Nombre",
  },
  {
    name: "lastName",
    type: "text",
    label: "Apellido",
    placeholder: "Apellido",
  },
  {
    name: "identification",
    type: "text",
    label: "Identificación",
    placeholder: "Identificación",
  },
  {
    name: "birthDate",
    type: "date",
    label: "Fecha de nacimiento",
    placeholder: "Fecha de nacimiento",
  },
];

export const fieldsActivity: InputText[] = [
  {
    name: "type",
    type: "text",
    label: "Tipo de actividad",
    placeholder: "Tipo de actividad",
  },
  {
    name: "description",
    type: "text",
    label: "Descripción",
    placeholder: "Descripción",
  },
  {
    name: "experience",
    type: "number",
    label: "Años de experiencia",
    placeholder: "Años de experiencia",
  },
];
