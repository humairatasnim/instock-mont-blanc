import { NavLink } from "react-router-dom";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import "./Warehouses.scss";

function Warehouses() {
  return (
    <main className="container">
      <section className="panel">

        <div className="panel__header">
          <h1 className="panel__title">Warehouses</h1>
          <input
            className="form__input panel__search"
            type="text"
            id="name"
            name="name"
            placeholder="Search..."
          />
          <button className="button button-primary panel__button">
            + Add New Warehouse
          </button>
        </div>

        <div className="panel__body">

          <div className="table__row">

            <div className="table__info">
              <div className="table__column">
                <div className="table__content-group">
                  <h2 className="table-header">Warehouse</h2>
                  <NavLink to="" className="link table-body">
                    <span className="link__text">Manhattan</span>
                    <img
                      src={chevronIcon}
                      alt="Chevron icon"
                      className="link__icon"
                    />
                  </NavLink>
                </div>
                <div className="table__content-group">
                  <h2 className="table-header">Address</h2>
                  <div className="table-body">503 Broadway, New York, USA</div>
                </div>
              </div>
              <div className="table__column">
                <div className="table__content-group">
                  <h2 className="table-header">Contact Name</h2>
                  <div className="table-body">Parmin Aujla</div>
                </div>
                <div className="table__content-group">
                  <h2 className="table-header">Contact Information</h2>
                  <div className="table-body">
                    +1 (629) 555-0129 paujla@instock.com
                  </div>
                </div>
              </div>
            </div>

            <div className="table__actions">
              <button className="table__actions--delete-btn">
                <img src={deleteIcon} className="icon" />
              </button>
              <button className="table__actions--edit-btn">
                <img src={editIcon} className="icon" />
              </button>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}

export default Warehouses;
