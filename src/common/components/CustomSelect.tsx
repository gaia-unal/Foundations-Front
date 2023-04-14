import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [key: string]: any;
}

export const CustomSelect = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label
        className="block mb-2 text-base font-medium text-label"
        htmlFor={props.name}
      >
        {label}
      </label>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        {...field}
        {...props}
      />
      <ErrorMessage
        name={props.name}
        component={"span"}
        className="text-red-700 text-sm"
      />
    </>
  );
};
