import InputMask from "react-input-mask";

import Input from "../Input";
import { PhoneFieldProps } from "./types";

const PhoneField = ({ onChange, label, value, onBlur, name, inputRef }: PhoneFieldProps) => {
  return (
    <InputMask
      mask="+7 (999) 999-99-99"
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    >
      {/* @ts-ignore */}
      {(inputProps) => <Input label={label} type="tel" {...inputProps} ref={inputRef} />}
    </InputMask>
  );
};

export default PhoneField;