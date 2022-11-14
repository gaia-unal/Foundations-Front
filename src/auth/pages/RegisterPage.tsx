import { Form, Formik } from "formik";
import { NavigateFunction, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { startRegisterUser } from "../../store/auth/authThunk";
import { InputText } from "../components/InputText";
import { FieldsRegister } from "../data/FormFields";

export const Register = () => {
  const navigate: NavigateFunction = useNavigate();
  const { errorMessage } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const onClickLogin = () => {
    navigate("/");
  };
  const onClickRegister = (
    email: string,
    password: string,
    displayName: string
  ) => {
    dispatch(startRegisterUser(email, password, displayName));
  };

  return (
    <div className="bg-white w-1/3 p-10 rounded-xl shadow-md shadow-paragraph">
      <h1 className="block text-3xl font-medium text-primary mb-6">
        Crear Cuenta
      </h1>
      <Formik
        initialValues={{
          displayName: "",
          email: "",
          password: "",
          validatePassword: "",
        }}
        onSubmit={({ email, password, displayName }) =>
          onClickRegister(email, password, displayName)
        }
        validationSchema={Yup.object({
          displayName: Yup.string()
            .required("El nombre es obligatorio")
            .min(3, "El nombre debe tener al menos 3 caracteres"),
          email: Yup.string()
            .email("El email no es válido")
            .required("El email es obligatorio"),
          password: Yup.string()
            .required("La contraseña es obligatoria")
            .min(6, "La contraseña debe tener al menos 6 caracteres"),
          validatePassword: Yup.string()
            .required("La validación de contraseña es obligatoria")
            .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden"),
        })}
      >
        <Form>
          {FieldsRegister.map((field) => (
            <InputText key={field.name} {...field} />
          ))}
          <div className="flex flex-row-reverse">
            <p
              onClick={onClickLogin}
              className="underline cursor-pointer text-blue-900"
            >
              Ya tengo una cuenta
            </p>
          </div>
          <div className="flex justify-center mt-2">
            {errorMessage && (
              <span className="text-red-700 text-sm">{errorMessage}</span>
            )}
          </div>
          <button
            className="group relative h-12 w-full overflow-hidden rounded-lg bg-gray-200 text-lg shadow mt-6"
            type="submit"
          >
            <div className="absolute inset-0 w-3 bg-slate-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">
              Registrarme
            </span>
          </button>
        </Form>
      </Formik>
    </div>
  );
};
