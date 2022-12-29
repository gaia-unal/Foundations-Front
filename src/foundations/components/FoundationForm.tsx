import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { InputText } from "../../common/components/InputText";
import { useAppDispatch } from "../../hooks/useRedux";
import { textFieldsNewFoundation } from "../data/inputFieldFoundation";

export const FoundationForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white w-full p-10 rounded-xl">
      <h1 className="block text-3xl font-medium text-primary mb-6">
        Añadir fundación
      </h1>
      <Formik
        initialValues={{
          identification: "",
          name: "",
          address: "",
          email: "",
          phone: "",
          description: "",
          logo: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
        validationSchema={Yup.object({
          identification: Yup.string()
            .required("La identificación es obligatoria")
            .min(6, "La identificación debe tener al menos 6 caracteres"),
          name: Yup.string()
            .required("El nombre es obligatorio")
            .min(6, "El nombre debe tener al menos 6 caracteres"),
          address: Yup.string()
            .required("La dirección es obligatoria")
            .min(6, "La dirección debe tener al menos 6 caracteres"),
          email: Yup.string()
            .email("El email no es válido")
            .required("El email es obligatorio"),
          phone: Yup.number()
            .required("El teléfono es obligatorio")
            .min(6, "El teléfono debe tener al menos 6 caracteres"),
          description: Yup.string().notRequired(),
          logo: Yup.string().notRequired(),
        })}
      >
        <Form>
          <div className="grid grid-cols-2 gap-4">
            {textFieldsNewFoundation.map((field) => (
              <InputText key={field.name} {...field} />
            ))}
            <div className="col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-base font-medium text-label"
              >
                Descripción
              </label>
              <Field
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="description"
                as="textarea"
              />
              <ErrorMessage name="description" />
            </div>
          </div>
          <div className="flex gap-6 mt-5">
            <button
              className="group relative h-12 w-full overflow-hidden rounded-lg bg-gray-200 text-lg shadow"
              type="submit"
            >
              <div className="absolute inset-0 w-3 bg-slate-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">
                Crear fundación
              </span>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
