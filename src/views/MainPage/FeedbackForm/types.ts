export interface FeedbackFormProps {
  onCancel?: () => void;
  onSubmit: (formState: FormStateType) => void;
}

export interface FormStateType {
  name: string;
  phoneNumber: string;
  message: string;
}