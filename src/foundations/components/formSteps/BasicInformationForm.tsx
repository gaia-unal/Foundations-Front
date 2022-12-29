import { Form, Formik } from "formik";
import { InputText } from "../../../common/components/InputText";
import { fieldsBasicInformation } from "../../data/inputFieldMember";

export const BasicInformationForm = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {fieldsBasicInformation.map((field) => (
          <InputText key={field.name} {...field} />
        ))}
      </div>
    </>
  );
};
