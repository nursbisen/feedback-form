import { RegisterOptions } from 'react-hook-form';

export type FormValidationType<FormStateType extends Record<string, any>> = {
  [key in keyof FormStateType]?: RegisterOptions;
};
