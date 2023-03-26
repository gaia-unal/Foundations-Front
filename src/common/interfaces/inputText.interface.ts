export interface InputText {
  name: string;
  type: "text" | "email" | "password" | "file" | "date" | "number" | "textarea";
  label: string;
  placeholder?: string;
  className?: string;
}
