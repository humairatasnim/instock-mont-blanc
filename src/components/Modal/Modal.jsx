import "./Modal.scss";
import closeButton from "/src/assets/icons/close-24px.svg";
import { Link } from "react-router-dom";

const Modal = (props) => {
  return props.trigger ? (
    <div className="modal">
      <Link to="/">
        <img src={closeButton} alt="close icon" className="modal__icon icon" />
      </Link>
      <div className="modal__content">
        {props.children}
        <div className="modal__details">
          <h1 className="modal__heading page-header">
            Delete {props.warehouse_name} warehouse?
          </h1>
          <p className="modal__description">
            Please confirm that you’d like to delete the Washington from the
            list of warehouses. You won’t be able to undo this action.
          </p>
        </div>
        <div className="modal__ctas">
          <button className="modal__button button-secondary">Cancel</button>
          <button className="modal__button button-delete">Delete</button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;
