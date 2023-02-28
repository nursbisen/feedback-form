import { RegisterOptions, UseFormReturn } from "react-hook-form";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  methods: UseFormReturn<any, any>;
}

export interface FormFieldProps {
  name: string;
  label: string;
  validation?: RegisterOptions;
}