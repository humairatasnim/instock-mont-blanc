import "./Modal.scss";
import closeButton from "/src/assets/icons/close-24px.svg";
import { useEffect, useRef } from "react";

const Modal = ({ openModal, setOpenModal, name }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (openModal) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [openModal]);

  return (
    <dialog className="modal" ref={modalRef}>
      <button onClick={() => setOpenModal(false)}>
        <img src={closeButton} alt="close icon" className="modal__icon icon" />
      </button>
      <div className="modal__content">
        <div className="modal__details">
          <h1 className="modal__heading page-header">
            Delete {name} warehouse?
          </h1>
          <p className="modal__description">
            Please confirm that you’d like to delete the {name} from the
            list of warehouses. You won’t be able to undo this action.
          </p>
        </div>
        <div className="modal__ctas">
          <button
            className="modal__button button-secondary"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </button>
          <button className="modal__button button-delete">Delete</button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
