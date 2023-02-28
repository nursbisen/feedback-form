import { useState } from "react";
import { toast } from 'react-hot-toast';

import exportJson from "../../utils/exportJson";
import { FeedbackFormType } from "../../types/feedbackForm";

const useContainer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const modal = {
    isOpen: isModalOpen,
    open: () => setModalOpen(true),
    close: () => setModalOpen(false),
  };

  const onSubmitForm = (formState: FeedbackFormType) => {
    exportJson(formState, formState.name);
    toast.success("Сообщение успешно отправлено");
  };

  return {
    modal,
    onSubmitForm
  };
};

export default useContainer;
