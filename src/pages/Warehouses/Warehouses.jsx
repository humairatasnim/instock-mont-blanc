import { NavLink } from "react-router-dom";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
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
          <div className="table__row table__header-row">
            <div className="table__column">
              <div className="table__content-group table__header-group">
                <h2 className="table__header">Warehouse</h2>
                <button className="table__sort-btn">
                  <img
                    src={sortIcon}
                    alt="Sort icon"
                    className="table__sort-icon"
                  />
                </button>
              </div>
              <div className="table__content-group table__header-group table__address">
                <h2 className="table__header">Address</h2>
                <button className="table__sort-btn">
                  <img
                    src={sortIcon}
                    alt="Sort icon"
                    className="table__sort-icon"
                  />
                </button>{" "}
              </div>
            </div>
            <div className="table__column">
              <div className="table__content-group table__header-group">
                <h2 className="table__header">Contact Name</h2>
                <button className="table__sort-btn">
                  <img
                    src={sortIcon}
                    alt="Sort icon"
                    className="table__sort-icon"
                  />
                </button>{" "}
              </div>
              <div className="table__content-group table__header-group table__contact-info">
                <h2 className="table__header">Contact Information</h2>
                <button className="table__sort-btn">
                  <img
                    src={sortIcon}
                    alt="Sort icon"
                    className="table__sort-icon"
                  />
                </button>{" "}
              </div>
            </div>
            <div className="table__actions">
              <h2 className="table__header">Actions</h2>
            </div>
          </div>

          <div className="table__row">
            <div className="table__column">
              <div className="table__content-group">
                <h2 className="table__header--mobile">Warehouse</h2>
                <NavLink to="" className="link table__body">
                  <span className="link__text">Manhattan</span>
                  <img
                    src={chevronIcon}
                    alt="Chevron icon"
                    className="link__icon"
                  />
                </NavLink>
              </div>
              <div className="table__content-group table__address">
                <h2 className="table__header--mobile">Address</h2>
                <div className="table__body">503 Broadway, New York, USA</div>
              </div>
            </div>
            <div className="table__column">
              <div className="table__content-group">
                <h2 className="table__header--mobile">Contact Name</h2>
                <div className="table__body">Parmin Aujla</div>
              </div>
              <div className="table__content-group table__contact-info">
                <h2 className="table__header--mobile">Contact Information</h2>
                <div className="table__body">
                  +1 (629) 555-0129
                  <br />
                  paujla@instock.com
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
        </div>
      </section>
    </main>
  );
}

export default Warehouses;
