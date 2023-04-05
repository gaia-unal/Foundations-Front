const optionActivity = [
  {
    label: "Tipo",
    value: "type",
  },
  {
    label: "Descripción",
    value: "description",
  },
  {
    label: "Experiencia",
    value: "experience",
  },
];

const optionFamily = [
  {
    label: "Relación",
    value: "relation",
  },

  {
    label: "Nombre",
    value: "name",
  },
  {
    label: "Apellido",
    value: "lastName",
  },
  {
    label: "Identificación",
    value: "identification",
  },
  {
    label: "Fecha de nacimiento",
    value: "birthDate",
  },
];

const optionMemberInformation = [
  {
    label: "Nombre",
    value: "name",
  },
  {
    label: "Apellido",
    value: "lastName",
  },
  {
    label: "Identificación",
    value: "identification",
  },

  {
    label: "Fecha de nacimiento",
    value: "birthDate",
  },
  {
    label: "correo electrónico",
    value: "email",
  },
  {
    label: "Teléfono",
    value: "phone",
  },
  {
    label: "Dirección",
    value: "address",
  },

  {
    label: "Nivel",
    value: "level",
  },
];

const optionEducation = [
  {
    label: "Nivel",
    value: "level",
  },
  {
    label: "Institución",
    value: "institution",
  },
  {
    label: "Título",
    value: "title",
  },
];

export const optionsCategories = [
  {
    value: "member",
    label: "Información miembro",
    options: optionMemberInformation,
  },
  {
    value: "activity",
    label: "Actividad comercial",
    options: optionActivity,
  },
  {
    value: "education",
    label: "Educación",
    options: optionEducation,
  },
  {
    value: "family",
    label: "Familiar de miembro",
    options: optionFamily,
  },
];
