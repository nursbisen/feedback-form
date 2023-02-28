export interface PhoneFieldProps extends Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'onBlur' | 'name'
> {
  inputRef?: React.Ref<HTMLInputElement>;
  label: string;
}