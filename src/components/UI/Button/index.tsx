import { forwardRef } from "react";
import classNames from "classnames";

import { ButtonProps } from "./types";

import s from "./styles.module.scss";

const Button = forwardRef(({ kind, size, text, type = "button", ...restProps }: ButtonProps, ref?: React.LegacyRef<HTMLButtonElement>) => {
  return (
    <button
      className={classNames(
        s.button,
        s[size],
        s[kind]
      )}
      type={type}
      ref={ref}
      {...restProps}
    >
      {text}
    </button>
  );
});

export default Button;