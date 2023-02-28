import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { Input } from "../UI";
import { FormFieldProps } from "./types";

const FormInput = ({ label, name }: FormFieldProps) => {
  const { register, getFieldState, formState } = useFormContext();

  return (
    <>
      <Input
        label={label}
        error={!!getFieldState(name, formState).error}
        {...register(name, { required: "Обязательное поле" })}
      />
      <ErrorMessage name={name} errors={formState.errors} />
    </>
  );
};

export default FormInput;