import { NavLink } from "react-router-dom";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { useState } from "react";
import "./Inventory.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import Modal from "../../components/Modal/Modal";

function Inventory({ inventories, warehouses }) {
  const [itemToDelete, setItemToDelete] = useState(null);

  function deleteItemHandler(item) {
    setItemToDelete(item);
  }

  return (
    <main className="container">
      <Modal
        item={itemToDelete}
        type={"item"}
        onClose={() => setItemToDelete(null)}
      />
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

        <div className="table-header">
          <div className="inventory__mobile-box">
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
              <span className="table-header__text">QTY</span>
              <img
                className="link__icon"
                src={sortIcon}
                alt="sort icon to sort inventory item"
              ></img>
            </div>
          </div>

          <div className="table-header__warehouse table-header__title">
            <span className="table-header__text">WAREHOUSE</span>
            <img
              className="link__icon"
              src={sortIcon}
              alt="sort icon to sort inventory item"
            ></img>
          </div>

          <div className="table-header__actions">
            <span className="table-header__text">ACTIONS</span>
          </div>
        </div>

        <ul className="table__body">
          {inventories.map((inventory) => (
            <InventoryList
              key={inventory.id}
              item={inventory}
              warehouses={warehouses}
              deleteHandler={deleteItemHandler}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Inventory;
