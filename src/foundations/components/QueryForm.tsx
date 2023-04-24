import { Form, Formik } from "formik";
import { AiOutlineSearch } from "react-icons/ai";
import * as Yup from "yup";
import { CustomSelect } from "../../common/components/CustomSelect";
import { InputText } from "../../common/components/InputText";
import { useLazyCustomSearchQuery } from "../../store/fundations/foundation.api";
import { optionsCategories } from "../data/optionSelect";
import { useAppDispatch } from "../../hooks/useRedux";
import { setQueryMembers } from "../../store/fundations/foundationSlice";
import Swal from "sweetalert2";

export const QueryForm = () => {
  const [triggerSearch] = useLazyCustomSearchQuery();
  const dispatch = useAppDispatch();

  const onClickSearch = async (values: {
    key: string;
    category: string;
    param: string;
  }) => {
    const { data: resultMembers = [] } = await triggerSearch({ ...values });
    if (resultMembers.length === 0)
      return Swal.fire({
        title: "No se encontraron miembros",
        icon: "info",
        confirmButtonText: "Aceptar",
      });
    dispatch(setQueryMembers(resultMembers));
  };

  return (
    <>
      <Formik
        initialValues={{ key: "", category: "", param: "" }}
        onSubmit={(values) => onClickSearch(values)}
        validationSchema={Yup.object({
          key: Yup.string()
            .required("La palabra clave es obligatoria")
            .min(3, "La palabra clave debe tener al menos 3 caracteres"),
          category: Yup.string().required("La categoría es obligatoria"),
          param: Yup.string().required("El parametro es obligatorio"),
        })}
      >
        {({ values: { category } }) => (
          <Form>
            <div className="flex h-24 gap-4 items-start">
              <div className="w-1/2">
                <InputText
                  key={"key"}
                  name="key"
                  label="Palabra clave"
                  type="text"
                />
              </div>
              <div className="w-1/5 ">
                <CustomSelect
                  key={"category"}
                  name="category"
                  label="Categoría"
                >
                  <option value="">Selecciona una opción</option>
                  {optionsCategories.map((option) => (
                    <option key={option.label} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </CustomSelect>
              </div>
              <div className="w-1/5 ">
                <CustomSelect key={"param"} name="param" label="Parametro">
                  <option value="">Selecciona una opción</option>
                  {optionsCategories
                    .find((option) => option.value === category)
                    ?.options.map((option) => (
                      <option key={option.label} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                </CustomSelect>
              </div>
              <button
                className="p-2 place-self-center overflow-hidden rounded-lg bg-gray-200 text-lg shadow hover:bg-gray-500 flex justify-center items-center"
                type="submit"
              >
                <AiOutlineSearch className="text-2xl" />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
