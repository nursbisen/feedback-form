import { useForm } from "react-hook-form";

import { FeedbackFormProps } from "./types";
import { defaultValues } from "../../../constants/feedbackForm";

const useContainer = ({ onSubmit, onCancel }: FeedbackFormProps) => {
  const methods = useForm({ defaultValues });

  const handleSubmitForm = methods.handleSubmit(
    (formState) => {
      onSubmit(formState);
      methods.reset(defaultValues);
    }
  );

  const handleCancel = () => {
    onCancel && onCancel();
    methods.reset(defaultValues);
  };

  return {
    methods,
    handleCancel,
    handleSubmitForm,
  };
};

export default useContainer;