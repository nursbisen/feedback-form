import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import TextArea from "../UI/Textarea";
import { FormFieldProps } from "./types";

const FormInput = ({ label, name }: FormFieldProps) => {
  const { register, getFieldState, formState } = useFormContext();

  return (
    <>
      <TextArea
        error={!!getFieldState(name, formState).error}
        label={label}
        {...register(name, { required: "Обязательное поле" })}
      />
      <ErrorMessage errors={formState.errors} name={name} />
    </>
  );
};

export default FormInput;