export interface InputText {
  name: string;
  type: "text" | "email" | "password" | "file" | "date" | "number";
  label: string;
  placeholder?: string;
  className?: string;
}
