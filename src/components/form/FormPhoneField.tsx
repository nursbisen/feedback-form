import { Controller } from "react-hook-form";

import { PhoneField } from "../UI";
import { FormFieldProps } from "./types";

const FormPhoneField = ({ label, name }: FormFieldProps) => {
  return (
    <Controller
      name={name}
      rules={{
        required: "Обязательное поле"
      }}
      render={({
        field: { name, ref, ...rest },
        fieldState,
      }) => (
        <PhoneField
          label={label}
          inputRef={ref}
          {...rest}
        />
      )}
    />
  );
};

export default FormPhoneField;