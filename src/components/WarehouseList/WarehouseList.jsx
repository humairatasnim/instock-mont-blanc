import { NavLink, useNavigate } from "react-router-dom";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import "./WarehouseList.scss";

function WarehouseList({ warehouse }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    alert("show Delete modal");
    navigate("/");
  };

  const handleEdit = () => {
    navigate(`/warehouses/${warehouse.id}/edit`);
  };

  return (
    <li className="table__row">
      <div className="table__column table__column--warehouse">
        <div className="table__body-cell table__cell--name">
          <h2 className="table__header-text mobile-only">Warehouse</h2>
          <div className="table__cell-text">
            <NavLink to={`/warehouses/${warehouse.id}`} className="link">
              <span className="link__text">{warehouse.warehouse_name}</span>
              <img src={chevronIcon} alt="Chevron icon" className="link__icon" />
            </NavLink>
          </div>
        </div>

        <div className="table__body-cell table__cell--address">
          <h2 className="table__header-text mobile-only">Address</h2>
          <div className="table__cell-text">
            {warehouse.address}, {warehouse.city}, {warehouse.country}
          </div>
        </div>
      </div>

      <div className="table__column table__column--contact">
        <div className="table__body-cell table__cell--contact">
          <h2 className="table__header-text mobile-only">Contact Name</h2>
          <div className="table__cell-text">{warehouse.contact_name}</div>
        </div>

        <div className="table__body-cell table__cell--contact-info">
          <h2 className="table__header-text mobile-only">
            Contact Information
          </h2>
          <div className="table__cell-text">
            {warehouse.contact_phone}
            <br />
            {warehouse.contact_email}
          </div>
        </div>
      </div>

      <div className="table__actions">
        <button type="button" onClick={handleDelete} className="table__delete-btn">
          <img src={deleteIcon} alt="Delete icon" className="icon" />
        </button>
        <button type="button" onClick={handleEdit} className="table__edit-btn">
          <img src={editIcon} alt="Edit icon" className="icon" />
        </button>
      </div>
    </li>
  );
}

export default WarehouseList;
