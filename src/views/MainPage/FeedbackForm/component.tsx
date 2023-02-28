import { Button } from "../../../components/UI";
import { Form, FormInput, FormTextarea, FormPhoneField } from "../../../components/form";

import useContainer from "./hook";
import { FeedbackFormProps } from "./types";

import s from './styles.module.scss';

const FeedbackForm = ({ onCancel, onSubmit }: FeedbackFormProps) => {
  const { methods, handleSubmitForm, handleCancel } = useContainer({ onCancel, onSubmit });

  return (
    <div className={s.formContainer}>
      <h1>Форма обратной связи</h1>
      <Form methods={methods} onSubmit={handleSubmitForm}>
        <FormInput label="Имя" name="name" />
        <FormPhoneField label="Номер телефона" name="phoneNumber" />
        <FormTextarea label="Сообщение" name="message" />
        <div className={s.actionsRow}>
          <Button
            type="submit"
            kind="primary"
            size="sm"
            text="Отправить"
          />
          <Button
            type="button"
            onClick={handleCancel}
            kind="secondary"
            size="sm"
            text="Отмена"
          />
        </div>
      </Form>
    </div>
  );
};

export default FeedbackForm;