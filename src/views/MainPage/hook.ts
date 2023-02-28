import { useState } from "react";

import exportJson from "../../utils/exportJson";
import { FeedbackFormType } from "../../types/feedbackForm";

const useContainer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const modal = {
    isOpen: isModalOpen,
    open: () => setModalOpen(true),
    close: () => setModalOpen(false),
  };

  const exportFormData = (formState: FeedbackFormType) => {
    exportJson(formState, formState.name);
  };

  return {
    modal,
    exportFormData
  };
};

export default useContainer;