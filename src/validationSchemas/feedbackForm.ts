import { FeedbackFormType } from "../types/feedbackForm";
import { FormValidationType } from "../types/formValidation";
import { phoneNumberValidationRegEx, withoutSpecialCharsValidationRegEx } from "../constants/regExs";

export const validationSchemas: FormValidationType<FeedbackFormType> = {
  name: {
    required: "Обязательное поле",
    pattern: {
      value: withoutSpecialCharsValidationRegEx,
      message: "Поле не должен содержать спец.символы"
    },
    minLength: {
      value: 3,
      message: "Слишком короткое имя: минимум 3 символа",
    },
    maxLength: {
      value: 30,
      message: "Слишком длинное имя: максимум 30 символов",
    },
  },
  phoneNumber: {
    required: "Обязательное поле",
    pattern: {
      value: phoneNumberValidationRegEx,
      message: "Некорректный номер телефона"
    },
  },
  message: {
    required: "Обязательное поле",
    pattern: {
      value: withoutSpecialCharsValidationRegEx,
      message: "Поле не должен содержать спец.символы"
    },
    minLength: {
      value: 10,
      message: "Слишком короткое сообщение",
    },
    maxLength: {
      value: 300,
      message: "Слишком длинное сообщение",
    },
  },
};