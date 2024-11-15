import "./InventoryItem.scss";
import { NavLink} from "react-router-dom";
import editIcon from "/src/assets/icons/edit-24px.svg";
import deleteIcon from "/src/assets/icons/delete_outline-24px.svg";
import chevronIcon from "/src/assets/icons/chevron_right-24px.svg";

function InventoryItem({ item }) {

  const {id, item_name, status, category, quantity} = item;

  return (
    <li className="warehouse-item">

      <div className="warehouse-item__mobile-box">

        <div className="warehouse-item__column warehouse-item__name">
          <p className="warehouse-item__subtitle">INVENTORY ITEM</p>
          <NavLink to={`/inventory/${id}`} className="link">
            <span className="link__text body-medium">{item_name}</span>
            <img
              className="link__icon"
              src={chevronIcon}
              alt="icon direct to inventory item details"
            />
          </NavLink>
        </div>

        <div className="warehouse-item__status warehouse-item__column">
          <p className="warehouse-item__subtitle">STATUS</p>
          <div
            className={
              status === "In Stock" ? "tag in-stock" : "tag out-of-stock"
            }
          >
            {status}
          </div>
        </div>

        <div className="warehouse-item__category warehouse-item__column">
          <p className="warehouse-item__subtitle">CATEGORY</p>
          <p className="body-medium">{category}</p>
        </div>
        <div className="warehouse-item__quantity warehouse-item__column">
          <p className="warehouse-item__subtitle">QTY</p>
          <p className="body-medium">{quantity}</p>
        </div>
      </div>
      <div className="warehouse-item__icons">
        <NavLink to="/">  {/* ADD DELETE MODAL HERE */}
          <img
            className="link__icon"
            src={deleteIcon}
            alt="delete icon to delete inventory item"
          ></img>
        </NavLink>
        <NavLink to={`/inventory/${id}/edit`}>
          <img
            className="link__icon"
            src={editIcon}
            alt="edit icon to edit inventory item details"
          ></img>
        </NavLink>
      </div>
    </li>
  );
}

export default InventoryItem;
