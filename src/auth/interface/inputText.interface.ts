export interface InputText {
  name: string;
  type: "text" | "email" | "password";
  label: string;
  placeholder: string;
  className?: string;
}
