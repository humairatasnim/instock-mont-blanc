import "./Modal.scss";
import closeButton from "/src/assets/icons/close-24px.svg";
import { useEffect, useRef } from "react";

const Modal = ({ warehouse, type, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (warehouse) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [warehouse]);

  const handleClose = () => {
    modalRef.current?.close();
    onClose(); 
  };

  return (
    <dialog className="modal" ref={modalRef} onClose={handleClose}>
        <img src={closeButton} alt="close icon" className="modal__icon icon" onClick={handleClose}/>
      <div className="modal__content">
        <div className="modal__details">
          <h1 className="modal__heading page-header">
            {type === "warehouse"
              ? `Delete ${warehouse?.warehouse_name} warehouse?`
              : `Delete Television inventory item?`}
          </h1>
          <p className="modal__description">
            {type === "warehouse"
              ? `Please confirm that you’d like to delete ${warehouse?.warehouse_name} from the list of warehouses. You won’t be able to undo this action.`
              : "Please confirm that you’d like to delete Television from the inventory list. You won’t be able to undo this action."}
          </p>
        </div>
        <div className="modal__ctas">
          <button className="modal__button button-secondary" onClick={handleClose}>
            Cancel
          </button>
          <button className="modal__button button-delete">Delete</button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;