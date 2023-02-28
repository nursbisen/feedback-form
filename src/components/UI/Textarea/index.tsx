import { forwardRef } from "react";
import classNames from "classnames";

import { TextareaProps } from "./types";

import s from "./styles.module.scss";

const TextArea = forwardRef(({ error = false, label, ...rest }: TextareaProps, ref?: React.LegacyRef<HTMLTextAreaElement>) => {
  return (
    <div className={classNames(s.field, error && s.error)}>
      <textarea
        placeholder=" "
        autoComplete="off"
        ref={ref}
        {...rest}
      />
      <label>{label}</label>
    </div>
  );
});

export default TextArea;