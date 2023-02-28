import { ErrorMessageProps } from './types';

import s from './styles.module.scss';

const ErrorMessage = ({ children }: ErrorMessageProps) => (
  <div className={s.errorText}>
    {children}
  </div>
);

export default ErrorMessage;