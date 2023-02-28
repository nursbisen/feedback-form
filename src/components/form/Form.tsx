import { FormProvider } from 'react-hook-form';

import { FormProps } from './types';

const Form = ({ methods, children, ...restProps }: FormProps) => {
  return (
    <FormProvider {...methods}>
      <form {...restProps}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;