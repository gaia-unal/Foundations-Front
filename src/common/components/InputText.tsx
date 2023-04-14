import { ErrorMessage, useField } from "formik";
import { FunctionComponent } from "react";

interface InputTextProps {
  name: string;
  label: string;
  type: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const InputText: FunctionComponent<InputTextProps> = ({
  name,
  label,
  disabled,
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
        disabled={disabled}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        accept={
          props.type === "file" ? "image/png, image/jpeg, image/jpg" : undefined
        }
      />
      <ErrorMessage
        name={name}
        component={"span"}
        className="text-red-700 text-sm"
      />
    </div>
  );
};
