import { useForm } from "react-hook-form";

import { FeedbackFormProps } from "./types";
import { defaultValues } from "../../../constants/feedbackForm";
import getIntsFromString from "../../../utils/getIntsFromString";

const useContainer = ({ onSubmit, onCancel }: FeedbackFormProps) => {
  const methods = useForm({ defaultValues });

  const handleCancel = () => {
    onCancel && onCancel();
    methods.reset(defaultValues);
  };
  
  const handleSubmitForm = methods.handleSubmit(
    (formState) => {
      const finalState = {
        ...formState,
        phoneNumber: `+${getIntsFromString(formState.phoneNumber)}`,
      };

      onSubmit(finalState);
      handleCancel();
    }
  );

  return {
    methods,
    handleCancel,
    handleSubmitForm,
  };
};

export default useContainer;