import "./InventoryItem.scss";
import { NavLink, useParams } from "react-router-dom";
import editIcon from "/src/assets/icons/edit-24px.svg";
import deleteIcon from "/src/assets/icons/delete_outline-24px.svg";
import chevronIcon from "/src/assets/icons/chevron_right-24px.svg";

function InventoryItem() {

  return (
    <div className="inventory">
      <div className="inventory__mobile-box">
        <div className="inventory__name inventory__column">
          <p className="inventory__subtitle">INVENTORY ITEM</p>
          <NavLink to="/inventory/:id" className="link">
            <span className="link__text body-medium">Television</span>
            <img
              className="link__icon"
              src={chevronIcon}
              alt="icon direct to inventory item details"
            />
          </NavLink>
        </div>

        <div className="inventory__status inventory__column">
          <p className="inventory__subtitle">STATUS</p>
          <div className="tag in-stock">In stock</div> {/*JS DATA */}
        </div>

        <div className="inventory__category inventory__column">
          <p className="inventory__subtitle">CATEGORY</p>
          <p className="body-medium">Electronics</p>
        </div>
        <div className="inventory__quantity inventory__column">
          <p className="inventory__subtitle">QTY</p>
          <p className="body-medium">200</p>
          {/*JS DATA */}
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
