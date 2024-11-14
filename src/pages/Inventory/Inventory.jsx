import axios from "axios";
import { NavLink } from "react-router-dom";
import sortIcon from "../../assets/icons/sort-24px.svg";
import "./Inventory.scss";
import InventoryItem from "../../components/InventoryItem/InventoryItem";

function Inventory({ inventories }) {
  return (
    <main className="container">
      <section className="inventory">
        <div className="inventory__header">
          <h1 className="inventory__title">Inventory</h1>
          <input
            className="inventory__search"
            type="text"
            id="name"
            name="name"
            placeholder="Search..."
          />
          <NavLink to="inventory/add" className="button button-primary">
            + Add New Item
          </NavLink>
        </div>

        <div className="inventory__body">
          <div className="table-header">
            <div className="table-header__box">
              <div className="table-header__item table-header__title">
                <span className="table-header__text">INVENTORY ITEM</span>
                <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
              </div>
              <div className="table-header__status table-header__title">
                <span className="table-header__text">STATUS</span>
                <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
              </div>
              <div className="table-header__category table-header__title">
                <span className="table-header__text">CATEGORY</span>
                <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
              </div>
              <div className="table-header__quantity table-header__title">
                <span className="table-header__text">QUANTITY</span>
                <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
              </div>
            </div>
            <div className="table-header__actions">
              <span className="table-header__text">ACTIONS</span>
            </div>
          </div>
        </div>

        {/* <div className="inventory__body">
          <div className="table__header">
            <div className="table__column table__column--warehouse">
              <div className="table__header-cell table__cell--name">
                <h2 className="table__header-text">Warehouse</h2>
                <button className="table__sort-btn">
                  <img
                    src={sortIcon}
                    alt="Sort icon"
                    className="table__sort-icon"
                  />
                </button>
              </div>

              <div className="table__header-cell table__cell--address">
                <h2 className="table__header-text">Address</h2>
                <button className="table__sort-btn">
                  <img
                    src={sortIcon}
                    alt="Sort icon"
                    className="table__sort-icon"
                  />
                </button>
              </div>
            </div>

            <div className="table__column table__column--contact">
              <div className="table__header-cell table__cell--contact">
                <h2 className="table__header-text">Contact Name</h2>
                <button className="table__sort-btn">
                  <img
                    src={sortIcon}
                    alt="Sort icon"
                    className="table__sort-icon"
                  />
                </button>
              </div>

              <div className="table__header-cell table__cell--contact-info">
                <h2 className="table__header-text">Contact Information</h2>
                <button className="table__sort-btn">
                  <img
                    src={sortIcon}
                    alt="Sort icon"
                    className="table__sort-icon"
                  />
                </button>
              </div>
            </div>

            <div className="table__actions">
              <h2 className="table__header-text">Actions</h2>
            </div>
          </div> */}
        {/* <ul className="table__body">
            {inventories.map((inventory) => (
              <InventoryItem key={inventory.id} />
            ))}
          </ul> */}
        {/* </div> */}
      </section>
    </main>
  );
}

export default Inventory;
