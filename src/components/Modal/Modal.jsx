import "./Modal.scss";
import closeButton from "/src/assets/icons/close-24px.svg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL;

const Modal = ({ warehouse, type, onClose, item }) => {
  const modalRef = useRef(null);

  const [itemToDelete, setItemToDelete] = useState(null);
  const [warehouseToDelete, setWarehouseToDelete] = useState(null);

  function pageRefresh() {
    location.reload();
  }

  const delWarehouse = async () => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/api/warehouses/${warehouseToDelete}`);
      alert(`${warehouse?.warehouse_name} was sucessfully deleted. Refreshing Warehouses list.`);
      pageRefresh();
      modalRef.current?.close();
    } catch (error) {
      alert(`Error deleting warehouse with id: ${warehouseToDelete}`);
    }
  };

  const delItem = async () => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/api/inventories/${itemToDelete}`);
      alert(`${item?.item_name} was sucessfully deleted. Refreshing inventory list.`);
      modalRef.current?.close();
    } catch (error) {
      alert(`Error deleting Inventory Item with id: ${itemToDelete}`);
    }
  };

 // function triggerDel()

  useEffect(() => {
    if (warehouse) {
      setWarehouseToDelete(warehouse.id)
      modalRef.current?.showModal();
    }else if(item){
      setItemToDelete(item.id);
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [warehouse, item]);

  const handleClose = () => {
    modalRef.current?.close();
    onClose();
  };

  return (
    <dialog className="modal" ref={modalRef} onClose={handleClose}>
      <img
        src={closeButton}
        alt="close icon"
        className="modal__icon icon"
        onClick={handleClose}
      />
      <div className="modal__content">
        <div className="modal__details">
          <h1 className="modal__heading page-header">
            {type === "warehouse"
              ? `Delete ${warehouse?.warehouse_name} warehouse?`
              : `Delete ${item?.item_name} inventory item?`}
          </h1>
          <p className="modal__description">
            {type === "warehouse"
              ? `Please confirm that you’d like to delete ${warehouse?.warehouse_name} from the list of warehouses. You won’t be able to undo this action.`
              : `Please confirm that you’d like to delete  ${item?.item_name} from the inventory list. You won’t be able to undo this action.`}
          </p>
        </div>
        <div className="modal__ctas">
          <button
            className="modal__button button-secondary"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            onClick={item?delItem:delWarehouse}
            className="modal__button button-delete"
          >
            Delete
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
