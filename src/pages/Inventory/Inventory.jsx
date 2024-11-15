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
              <div className="table-header__warehouse table-header__title">
                <span className="table-header__text">WAREHOUSE</span>
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

        <ul className="table__body">
            {inventories.map((inventory) => (
              <InventoryItem key={inventory.id} item={inventory} />
            ))}
          </ul>
      </section>
    </main>
  );
}

export default Inventory;
