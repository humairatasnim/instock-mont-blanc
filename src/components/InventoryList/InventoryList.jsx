import "./InventoryList.scss";
import { NavLink } from "react-router-dom";
import editIcon from "/src/assets/icons/edit-24px.svg";
import deleteIcon from "/src/assets/icons/delete_outline-24px.svg";
import chevronIcon from "/src/assets/icons/chevron_right-24px.svg";

function InventoryList({ item, warehouses, deleteHandler }) {

  const { id, item_name, status, category, quantity, warehouse_id } = item;

  const warehouse = warehouses.find((wh)=>(wh.id === warehouse_id));

  return (
    <div className="item">
      <div className="item__mobile-box">

        <div className="item__name item__column">
          <p className="item__subtitle">INVENTORY ITEM</p>
          <NavLink to={`/inventory/${id}`} className="link">
            <span className="link__text body-medium">{item_name}</span>
            <img
              className="link__icon"
              src={chevronIcon}
              alt="icon direct to inventory item details"
            />
          </NavLink>
        </div>

        <div className="item__status item__column">

          <p className="item__subtitle">STATUS</p>
          <div className={status === "In Stock" ? "tag in-stock" : "tag out-of-stock"}>
            {status}
          </div>
        </div>

        <div className="item__category item__column">
          <p className="item__subtitle">CATEGORY</p>
          <p className="body-medium">{category}</p>
        </div>

        <div className="item__quantity item__column">
          <p className="item__subtitle">QTY</p>
          <p className="body-medium">{quantity}</p>
        </div>

      </div>

      <div className="item__warehouse item__column">
          <p className="item__subtitle">WAREHOUSE</p>
          <p className="body-medium">{warehouse.warehouse_name}</p>
        </div>

      <div className="item__icons">
        <div className="link" onClick={() => deleteHandler(item)}  >
          <img
            className="icon"
            src={deleteIcon}
            alt="delete icon to delete inventory item"
          ></img>
        </div>
        <NavLink to={`/inventory/${id}/edit`} className="link" >
          <img
            className="icon"
            src={editIcon}
            alt="edit icon to edit inventory item details"
          ></img>
        </NavLink>
      </div>

    </div>
  );
}

export default InventoryList;
