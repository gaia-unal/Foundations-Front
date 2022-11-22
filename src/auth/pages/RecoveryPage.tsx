import { Form, Formik } from "formik";
import { NavigateFunction, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { recoverPassword } from "../../firebase/auth/providers";
import { useAppSelector } from "../../hooks/useRedux";
import { InputText } from "../../common/components/InputText";
import { FieldsResetPassword } from "../data/FormFields";
import { AiFillCaretLeft } from "react-icons/ai";
import Swal from "sweetalert2";

export const RecoveryPage = () => {
  const navigate: NavigateFunction = useNavigate();
  const { errorMessage } = useAppSelector((state) => state.auth);
  const onClickResetPassword = (email: string) => {
    recoverPassword(email);
    Swal.fire({
      title: "¡Listo!",
      text: "Se ha enviado un correo para restablecer tu contraseña",
      icon: "success",
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };
  const onClickBack = () => {
    navigate("/");
  };

  return (
    <div className="bg-white w-1/3 p-10 rounded-xl shadow-md shadow-paragraph">
      <div className="flex gap-4 content-center items-center mb-6">
        <AiFillCaretLeft
          onClick={onClickBack}
          className="bg-gray-200 rounded-sm cursor-pointer text-3xl hover:bg-slate-600 hover:text-white"
        />
        <h1 className="block text-3xl font-medium text-primary ">
          Recuperar cuenta
        </h1>
      </div>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={({ email }) => onClickResetPassword(email)}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("El email no es válido")
            .required("El email es obligatorio"),
        })}
      >
        <Form>
          {FieldsResetPassword.map((field) => (
            <InputText key={field.name} {...field} />
          ))}
          <div className="flex justify-center mt-2">
            {errorMessage && (
              <span className="text-red-700 text-sm">{errorMessage}</span>
            )}
          </div>
          <button
            className="group relative h-12 w-full overflow-hidden rounded-lg bg-gray-200 text-lg mt-4 shadow"
            type="submit"
          >
            <div className="absolute inset-0 w-3 bg-slate-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">
              Recuperar
            </span>
          </button>
        </Form>
      </Formik>
    </div>
  );
};
