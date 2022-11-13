import { ErrorMessage, useField } from "formik";
import { FunctionComponent } from "react";

interface InputTextProps {
  name: string;
  label: string;
  type: string;
  className?: string;
  placeholder: string;
}

export const InputText: FunctionComponent<InputTextProps> = ({
  name,
  label,
  ...props
}) => {
  const [field] = useField(name);

  return (
    <div className="mb-2">
      <label
        htmlFor={name}
        className="block mb-2 text-base font-medium text-label"
      >
        {label}
      </label>
      <input
        id={name}
        {...field}
        {...props}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <ErrorMessage
        name={name}
        component={"span"}
        className="text-red-700 text-sm"
      />
    </div>
  );
};
