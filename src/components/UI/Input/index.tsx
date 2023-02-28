import { forwardRef } from "react";
import classNames from "classnames";

import { InputProps } from "./types";

import s from "./styles.module.scss";

const Input = forwardRef(({ error = false, label, ...rest }: InputProps, ref?: React.LegacyRef<HTMLInputElement>) => {
  return (
    <div className={classNames(s.field, error && s.error)}>
      <input
        type="input"
        placeholder=" "
        ref={ref}
        autoComplete="off"
        {...rest}
      />
      <label>{label}</label>
    </div>
  );
});

export default Input;