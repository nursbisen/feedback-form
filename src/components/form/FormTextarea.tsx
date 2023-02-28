import { useFormContext } from "react-hook-form";
import { ErrorMessage as RHFErrorMessage } from "@hookform/error-message";

import { FormFieldProps } from "./types";
import { Textarea, ErrorMessage } from "../UI";

const FormInput = ({ label, name, validation }: FormFieldProps) => {
  const { register, getFieldState, formState } = useFormContext();

  return (
    <>
      <Textarea
        error={!!getFieldState(name, formState).error}
        label={label}
        {...register(name, validation)}
      />
      <RHFErrorMessage
        name={name}
        errors={formState.errors}
        render={({ message }) => <ErrorMessage>{message}</ErrorMessage>}
      />
    </>
  );
};

export default FormInput;