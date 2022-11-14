import { Form, Formik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { NavigateFunction, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import {
  startLoginWhitGoogle,
  startLoginWithEmailPassword,
} from "../../store/auth/authThunk";
import { InputText } from "../components/InputText";
import { FieldsLogin } from "../data/FormFields";

export const LoginPage = () => {
  const navigate: NavigateFunction = useNavigate();
  const { errorMessage } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const onClickRegister = () => {
    navigate("/register");
  };
  const onClickLogin = (email: string, password: string) => {
    dispatch(startLoginWithEmailPassword(email, password));
  };
  const onClickGoogle = () => {
    dispatch(startLoginWhitGoogle());
  };

  return (
    <div className="bg-white w-1/3 p-10 rounded-xl shadow-md shadow-paragraph">
      <h1 className="block text-3xl font-medium text-primary mb-6">
        Iniciar sesión
      </h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={({ email, password }) => onClickLogin(email, password)}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("El email no es válido")
            .required("El email es obligatorio"),
          password: Yup.string()
            .required("La contraseña es obligatoria")
            .min(6, "La contraseña debe tener al menos 6 caracteres"),
        })}
      >
        <Form>
          {FieldsLogin.map((field) => (
            <InputText key={field.name} {...field} />
          ))}
          <div className="flex flex-row-reverse">
            <p
              onClick={onClickRegister}
              className="underline cursor-pointer text-blue-900"
            >
              No tienes una cuenta?
            </p>
          </div>
          <div className="flex justify-center mt-2">
            {errorMessage && (
              <span className="text-red-700 text-sm">{errorMessage}</span>
            )}
          </div>
          <div className="flex gap-6 mt-5">
            <button
              className="group relative h-12 w-1/2 overflow-hidden rounded-lg bg-gray-200 text-lg shadow"
              type="submit"
            >
              <div className="absolute inset-0 w-3 bg-slate-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">
                iniciar sesión
              </span>
            </button>
            <button
              className="group relative h-12 w-1/2 overflow-hidden rounded-lg bg-gray-200 text-lg shadow"
              onClick={onClickGoogle}
              type="button"
            >
              <div className="absolute inset-0 w-3 bg-slate-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white flex justify-center gap-2">
                <FcGoogle className="mt-1" />
                Google
              </span>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
