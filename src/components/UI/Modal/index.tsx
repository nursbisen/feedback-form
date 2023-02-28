import { ModalProps } from "./types";

import s from "./styles.module.scss";

const Modal = ({ isOpen = false, onClose, children }: ModalProps) => {
  return isOpen ? (
    <div className={s.wrapper} onClick={onClose}>
      <div className={s.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;