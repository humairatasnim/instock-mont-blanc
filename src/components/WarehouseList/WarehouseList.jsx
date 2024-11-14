import { NavLink } from "react-router-dom";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
// import "./WarehouseList.scss";

function WarehouseList({ warehouse }) {
  return (
    <div className="table__row">
      <div className="table__column">
        <div className="table__content-group">
          <h2 className="table__header--mobile">Warehouse</h2>
          <NavLink to="" className="link table__body">
            <span className="link__text">{warehouse.warehouse_name}</span>
            <img src={chevronIcon} alt="Chevron icon" className="link__icon" />
          </NavLink>
        </div>
        <div className="table__content-group table__address">
          <h2 className="table__header--mobile">Address</h2>
          <div className="table__body">
            {warehouse.address}, {warehouse.city}, {warehouse.country}
          </div>
        </div>
      </div>
      <div className="table__column">
        <div className="table__content-group">
          <h2 className="table__header--mobile">Contact Name</h2>
          <div className="table__body">{warehouse.contact_name}</div>
        </div>
        <div className="table__content-group table__contact-info">
          <h2 className="table__header--mobile">Contact Information</h2>
          <div className="table__body">
            {warehouse.contact_phone}
            <br />
            {warehouse.contact_email}
          </div>
        </div>
      </div>
      <div className="table__actions">
        <button className="table__delete-btn">
          <img src={deleteIcon} className="icon" />
        </button>
        <button className="table__edit-btn">
          <img src={editIcon} className="icon" />
        </button>
      </div>
    </div>
  );
}

export default WarehouseList;
