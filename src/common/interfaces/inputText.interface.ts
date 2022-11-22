export interface InputText {
  name: string;
  type: "text" | "email" | "password" | "file";
  label: string;
  placeholder: string;
  className?: string;
}
