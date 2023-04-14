import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  index?: number;
  arrayName?: string;
  [x: string]: any;
}

export const CustomCheckbox = ({
  label,
  arrayName,
  index,
  name,
  ...props
}: Props) => {
  const fieldName = !!arrayName ? arrayName + "." + index + "." + name : name;

  const [field] = useField({ name: fieldName, type: "checkbox" });

  return (
    <>
      <label className="text-lg font-medium text-label">
        <input type="checkbox" className="mr-2" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={name} component="span" />
    </>
  );
};
