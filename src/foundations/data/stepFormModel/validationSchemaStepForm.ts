import * as yup from "yup";

export const validationSchemaStepForm = [
  yup.object().shape({
    name: yup.string().required("Nombre es requerido"),
    lastName: yup.string().required("Apellido es requerido"),
    identification: yup.number().required("Identificación es requerida"),
    address: yup.string().required("Dirección es requerida"),
    phone: yup.number().required("Teléfono es requerido"),
    email: yup
      .string()
      .required("Correo electrónico es requerido")
      .email("Correo electrónico no es válido"),
    birthDate: yup
      .date()
      .required("Fecha de nacimiento es requerida")
      .max(new Date(), "Fecha de nacimiento no es válida"),
  }),
  yup.object().shape({
    education: yup.array().of(
      yup.object().shape({
        level: yup.string().required("Nivel de estudio es requerido"),
        institution: yup.string().required("Institución es requerida"),
        title: yup.string().required("Título es requerido"),
        startDate: yup
          .date()
          .required("Fecha de inicio es requerida")
          .max(new Date(), "Fecha de inicio no es válida"),
        endDate: yup
          .date()
          .required("Fecha de finalización es requerida")
          .min(
            yup.ref("startDate"),
            "Fecha de finalización debe ser superior a la fecha de inicio"
          )
          .max(new Date(), "Fecha de finalización no es válida"),
      })
    ),
  }),
  yup.object().shape({
    family: yup.array().of(
      yup.object().shape({
        relation: yup.string().required("Relación es requerida"),
        name: yup.string().required("Nombre es requerido"),
        lastName: yup.string().required("Apellido es requerido"),
        identification: yup.number().required("Identificación es requerida"),
        birthDate: yup
          .date()
          .required("Fecha de nacimiento es requerida")
          .max(new Date(), "Fecha de nacimiento no es válida"),
      })
    ),
  }),
  yup.object().shape({
    activity: yup.array().of(
      yup.object().shape({
        type: yup.string().required("Tipo de actividad es requerido"),
        description: yup.string().required("Descripción es requerida"),
        experience: yup
          .number()
          .required("Años de experiencia es requerido")
          .min(0, "Años de experiencia debe ser mayor o igual a 0"),
      })
    ),
  }),
];
