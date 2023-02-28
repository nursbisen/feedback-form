import { FeedbackFormType } from "../../../types/feedbackForm";

export interface FeedbackFormProps {
  onCancel?: () => void;
  onSubmit: (formState: FeedbackFormType) => void;
}
