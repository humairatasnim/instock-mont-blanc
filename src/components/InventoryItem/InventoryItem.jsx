import "./InventoryItem.scss";
import { useNavigate } from "react-router-dom";
import editIcon from "/src/assets/icons/edit-24px.svg";
import deleteIcon from "/src/assets/icons/delete_outline-24px.svg";
import chevronIcon from "/src/assets/icons/chevron_right-24px.svg";

function InventoryItem({ items }) {
  const navigate = useNavigate();
  const item = {
    id: 11,
    item_name: "Monitor",
    category: "Electronics",
    status: "Out of Stock",
    quantity: 0,
  };

  const singleItem = () => {
    navigate(`/inventory/${item.id}`);
  };

  const editItem = () => {
    navigate(`/inventory/${item.id}/edit`);
  };

  const deleteModal = () => {
    navigate("/");
  }

  return (
    <div className="inventory">
      <div className="inventory__mobile-box">
        <div className="inventory__column">
          <p className="inventory__subtitle">INVENTORY ITEM</p>
          <div className="inventory__name" onClick={singleItem}>
            <span className="link body-medium">{item.item_name}</span>
            <img
              className="link__icon"
              src={chevronIcon}
              alt="icon direct to inventory item details"
            />
          </div>
        </div>

        <div className="inventory__status inventory__column">
          <p className="inventory__subtitle">STATUS</p>
          <div
            className={
              item.status === "In Stock" ? "tag in-stock" : "tag out-of-stock"
            }
          >
            {item.status}
          </div>
        </div>

        <div className="inventory__category inventory__column">
          <p className="inventory__subtitle">CATEGORY</p>
          <p className="body-medium">{item.category}</p>
        </div>
        <div className="inventory__quantity inventory__column">
          <p className="inventory__subtitle">QTY</p>
          <p className="body-medium">{item.quantity}</p>
        </div>
      </div>
      <div className="inventory__icons">
        <div onClick={deleteModal}>
          <img
            className="link__icon"
            src={deleteIcon}
            alt="delete icon to delete inventory item"
          ></img>
        </div>
        <div onClick={editItem}>
          <img
            className="link__icon"
            src={editIcon}
            alt="edit icon to edit inventory item details"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default InventoryItem;
