import { ErrorMessage, useField } from "formik";
import { FunctionComponent } from "react";

interface InputTextPropsArray {
  name: string;
  label: string;
  type: string;
  arrayName: string;
  index: number;
  placeholder?: string;
}

export const InputTextArray: FunctionComponent<InputTextPropsArray> = ({
  name,
  label,
  index,
  arrayName,
  ...props
}) => {
  const fieldName = arrayName + "." + index + "." + name;
  const [field] = useField(fieldName);

  return (
    <div className="mb-2">
      <label
        htmlFor={fieldName}
        className="block mb-2 text-base font-medium text-label"
      >
        {label}
      </label>
      <input
        id={fieldName}
        {...field}
        {...props}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <ErrorMessage
        name={fieldName}
        component={"span"}
        className="text-red-700 text-sm"
      />
    </div>
  );
};
