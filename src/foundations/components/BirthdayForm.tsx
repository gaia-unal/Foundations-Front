import { Form, Formik } from "formik";
import { AiOutlineSearch } from "react-icons/ai";
import * as Yup from "yup";
import { CustomSelect } from "../../common/components/CustomSelect";
import { useAppDispatch } from "../../hooks/useRedux";
import { useLazySearchBirthdayQuery } from "../../store/fundations/foundation.api";
import { setQueryMembers } from "../../store/fundations/foundationSlice";
import { monthsSelect } from "../data/optionSelect";
import Swal from "sweetalert2";

export const BirthdayForm = () => {
  const [triggerSearchBirthday] = useLazySearchBirthdayQuery();
  const dispatch = useAppDispatch();

  const onClickSearch = async (month: string) => {
    const { data: resultMembers = [] } = await triggerSearchBirthday(month);
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
        initialValues={{ month: "" }}
        onSubmit={({ month }) => onClickSearch(month)}
        validationSchema={Yup.object({
          month: Yup.string().required("El mes es obligatorio"),
        })}
      >
        {() => (
          <Form>
            <div className="flex justify-center h-24 gap-4 items-start">
              <div className="w-1/4">
                <CustomSelect
                  label="Mes de nacimiento"
                  key={"month"}
                  name="month"
                >
                  <option value="">Selecciona un mes</option>
                  {monthsSelect.map((option) => (
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
