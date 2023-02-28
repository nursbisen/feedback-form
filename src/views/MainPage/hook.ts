import { useState } from "react";
import exportJson from "../../utils/exportJson";

import { FeedbackFormTypes } from "./FeedbackForm";

const useContainer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const modal = {
    isOpen: isModalOpen,
    open: () => setModalOpen(true),
    close: () => setModalOpen(false),
  };

  const exportFormData = (formState: FeedbackFormTypes.FormStateType) => {
    exportJson(formState, formState.name);
  };

  return {
    modal,
    exportFormData
  };
};

export default useContainer;