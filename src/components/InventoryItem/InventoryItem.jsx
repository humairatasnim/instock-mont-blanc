import "./InventoryItem.scss";
import { NavLink } from "react-router-dom";
import editIcon from "/src/assets/icons/edit-24px.svg";
import deleteIcon from "/src/assets/icons/delete_outline-24px.svg";
import chevronIcon from "/src/assets/icons/chevron_right-24px.svg";

function InventoryItem({ inventories }) {
  const inventory = 
    {
      id: 11,
      item_name: "Monitor",
      category: "Electronics",
      status: "Out of Stock",
      quantity: 0,
    };

    // const inventory = inventories[id];

  return (
    <div className="inventory">
      <div className="inventory__mobile-box">
        <div className="inventory__name inventory__column">
          <p className="inventory__subtitle">INVENTORY ITEM</p>
          <NavLink to="/inventory/:id" className="link">
            <span className="link__text body-medium">{inventory.item_name}</span>
            <img
              className="link__icon"
              src={chevronIcon}
              alt="icon direct to inventory item details"
            />
          </NavLink>
        </div>

        <div className="inventory__status inventory__column">
          <p className="inventory__subtitle">STATUS</p>
          <div
            className={
              inventory.status === "In Stock"
                ? "tag in-stock"
                : "tag out-of-stock"
            }
          >
            {inventory.status}
          </div>
        </div>

        <div className="inventory__category inventory__column">
          <p className="inventory__subtitle">CATEGORY</p>
          <p className="body-medium">{inventory.category}</p>
        </div>
        <div className="inventory__quantity inventory__column">
          <p className="inventory__subtitle">QTY</p>
          <p className="body-medium">{inventory.quantity}</p>
        </div>
      </div>
      <div className="inventory__icons">
        <img
          className="link__icon"
          src={deleteIcon}
          alt="edit icon for warehouse details"
        ></img>
        <img
          className="link__icon"
          src={editIcon}
          alt="edit icon for warehouse details"
        ></img>
      </div>
    </div>
  );
}

export default InventoryItem;
