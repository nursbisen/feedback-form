import InputMask from "react-input-mask";

import Input from "../Input";
import { PhoneFieldProps } from "./types";

const PhoneField = ({ onChange, label, value, onBlur, name, inputRef, error }: PhoneFieldProps) => {
  return (
    <InputMask
      mask="+7 (999) 999-99-99"
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    >
      <Input label={label} error={error} type="tel" ref={inputRef} />
    </InputMask>
  );
};

export default PhoneField;