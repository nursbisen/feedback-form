// import useContainer from "./hook";
// import FeedbackForm from "./FeedbackForm";
// import { Button, Modal } from "../../components/UI";

// import s from './styles.module.scss';

// const MainPage = () => {
//   const { modal, exportFormData } = useContainer();

//   return (
//     <>
//       <div className={s.wrapper}>
//         <Button
//           kind="secondary"
//           size="lg"
//           text="Нажмите чтобы отправить сообщение"
//           onClick={modal.open}
//         />
//       </div>
//       <Modal isOpen={modal.isOpen} onClose={modal.close}>
//         <FeedbackForm onCancel={modal.close} onSubmit={exportFormData} />
//       </Modal>
//     </>
//   );
// };

// export default MainPage;