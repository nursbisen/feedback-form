import { Controller } from "react-hook-form";
import { ErrorMessage as RHFErrorMessage } from "@hookform/error-message";

import { FormFieldProps } from "./types";
import { ErrorMessage, PhoneField } from "../UI";

const FormPhoneField = ({ label, name, validation }: FormFieldProps) => {
  return (
    <Controller
      name={name}
      rules={validation}
      render={({
        field: { name, ref, ...rest },
        fieldState: { error },
        formState: { errors }
      }) => (
        <>
          <PhoneField
            error={!!error}
            label={label}
            inputRef={ref}
            {...rest}
          />
          <RHFErrorMessage
            name={name}
            errors={errors}
            render={({ message }) => <ErrorMessage>{message}</ErrorMessage>}
          />
        </>
      )}
    />
  );
};

export default FormPhoneField;