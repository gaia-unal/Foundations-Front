import { ErrorMessage, Field, Form, Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { InputText } from "../../common/components/InputText";
import { useAppSelector } from "../../hooks/useRedux";
import {
  useCreateFoundationMutation,
  useUpdateFoundationMutation,
} from "../../store/fundations/foundation.api";
import { textFieldsNewFoundation } from "../data/inputFieldFoundation";
import { useState } from "react";
import { uploadImage } from "../helper/uploadImage";

interface Props {
  close: () => void;
}

export const FoundationForm = ({ close }: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [LogoFile, setLogoFile] = useState<File>();

  const [
    createFoundation,
    { isError: isErrorCreatingFoundation, isSuccess, status },
  ] = useCreateFoundationMutation();

  const [updateFoundation, { isError: isErrorUpdatingFoundation }] =
    useUpdateFoundationMutation();
  const { activeFoundation } = useAppSelector((state) => state.foundation);

  const { id } = activeFoundation;
  const isEditing = pathname.includes("edit");

  const onChangeLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setLogoFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white w-full p-10 rounded-xl">
      <h1 className="block text-3xl font-medium text-primary mb-6">
        {!isEditing ? "Crear fundación" : "Editar fundación"}
      </h1>
      <Formik
        initialValues={
          isEditing
            ? {
                identification: activeFoundation.identification,
                name: activeFoundation.name,
                adminEmail: activeFoundation.adminEmail,
                address: activeFoundation.address,
                email: activeFoundation.email,
                phone: activeFoundation.phone,
                description: activeFoundation.description,
              }
            : {
                identification: "",
                name: "",
                adminEmail: "",
                address: "",
                email: "",
                phone: "",
                description: "",
              }
        }
        onSubmit={async ({ ...values }, { resetForm }) => {
          if (!isEditing) {
            const imageUrl = await uploadImage(LogoFile!);

            await createFoundation({ ...values, logo: imageUrl });

            if (!isErrorCreatingFoundation) {
              close();

              Swal.fire({
                title: "Fundación creada",
                text: "La fundación se ha creado correctamente",
                icon: "success",
                confirmButtonText: "Aceptar",
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/");
                }
              });
              resetForm();
            } else {
              Swal.fire({
                title: "Error",
                text: "Ha ocurrido un error al crear la fundación",
                icon: "error",
                confirmButtonText: "Aceptar",
              });
            }
          } else {
            let imageUpdatedUrl = activeFoundation.logo;
            if (LogoFile) {
              imageUpdatedUrl = await uploadImage(LogoFile!);
            }
            console.log("llegue");

            await updateFoundation({
              foundation: {
                ...values,
                logo: imageUpdatedUrl,
              },
              id: id,
            });

            if (!isErrorUpdatingFoundation) {
              Swal.fire({
                title: "Fundación actualizada",
                text: "La fundación se ha actualizado correctamente",
                icon: "success",
                confirmButtonText: "Aceptar",
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/");
                }
              });
              resetForm();
            }
          }
        }}
        validationSchema={Yup.object({
          identification: Yup.string()
            .required("La identificación es obligatoria")
            .min(6, "La identificación debe tener al menos 6 caracteres"),
          name: Yup.string()
            .required("El nombre es obligatorio")
            .min(6, "El nombre debe tener al menos 6 caracteres"),
          adminEmail: Yup.string()
            .email("El email no es válido")
            .required("El email es obligatorio"),
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
            <div>
              <label
                htmlFor="logo"
                className="block mb-2 text-base font-medium text-label"
              >
                Logo
              </label>
              <Field
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="logo"
                type="file"
                onChange={onChangeLogo}
                accept="image/*"
              />
              <ErrorMessage name="description" />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block mb-2 text-base font-medium text-label"
              >
                Descripción
              </label>
              <Field
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="description"
                placeholder="Descripción de la fundación"
                as="textarea"
              />
              <ErrorMessage name="description" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 mt-5">
            <button
              className="group relative h-12 w-1/3 overflow-hidden rounded-lg bg-gray-200 text-lg shadow"
              type="submit"
            >
              <div className="absolute inset-0 w-3 bg-slate-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">
                Confirmar
              </span>
            </button>
            <button
              className=" h-12 w-1/3 overflow-hidden rounded-lg bg-red-600 text-lg shadow text-white"
              onClick={() => {
                isEditing ? navigate(-1) : close();
              }}
              type="button"
            >
              Cancelar
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
