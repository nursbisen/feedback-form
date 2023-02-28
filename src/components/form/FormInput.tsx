import { useFormContext } from "react-hook-form";
import { ErrorMessage as RHFErrorMessage } from "@hookform/error-message";

import { FormFieldProps } from "./types";
import { ErrorMessage, Input } from "../UI";
import { withoutSpecialCharsValidationRegEx } from "../../constants/regExs";

const FormInput = ({ label, name, validation }: FormFieldProps) => {
  const { register, getFieldState, formState } = useFormContext();

  return (
    <>
      <Input
        label={label}
        error={!!getFieldState(name, formState).error}
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