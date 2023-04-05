import { Form, Formik } from "formik";
import { AiOutlineSearch } from "react-icons/ai";
import * as Yup from "yup";
import { CustomSelect } from "../../common/components/CustomSelect";
import { InputText } from "../../common/components/InputText";
import { optionsCategories } from "../data/optionSelect";

export const QueryForm = () => {
  return (
    <>
      <Formik
        initialValues={{ query: "", category: "", subcategory: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          query: Yup.string()
            .required("La palabra clave es obligatoria")
            .min(3, "La palabra clave debe tener al menos 3 caracteres"),
          category: Yup.string().required("La categoría es obligatoria"),
          subcategory: Yup.string().required("El parametro es obligatorio"),
        })}
      >
        {({ values: { category } }) => (
          <Form>
            <div className="flex gap-2 items-center">
              <div className="w-1/2">
                <InputText
                  key={"query"}
                  name="query"
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
                <CustomSelect
                  key={"subcategory"}
                  name="subcategory"
                  label="Parametro"
                >
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
                className="p-2 ml-6 place-self-end mb-3 overflow-hidden rounded-lg bg-gray-200 text-lg shadow hover:bg-gray-500 flex justify-center items-center"
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
