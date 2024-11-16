import { NavLink } from "react-router-dom";
import sortIcon from "../../assets/icons/sort-24px.svg";
import "./Inventory.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import Modal from "../../components/Modal/Modal";
import { useEffect, useState } from "react";
import axios from "axios";


const BASE_URL = import.meta.env.VITE_API_URL;


function Inventory({ inventories: initialInventories, warehouses, getInventories }) {
  const [sortOrder, setSortOrder] = useState("asc");
  const [inventories, setInventories] = useState(initialInventories);

  //Sort Button Function

  const handleSort = async (sortBy = "item_name" || "category" || "status" || "quantity" ) =>  {
    try {
        const { data } = await axios.get(`${BASE_URL}/api/inventories/`, {
          params: { sortBy, order: sortOrder },
        });
          console.log("Sorted Inventories:", data); 
          setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
          setInventories(data);
      } catch (error) {
          console.error("Error getting inventory data from API call", error);
          }
      }

  // const getInventories = async () => {
  //   try {
  //     const { data } = await axios.get(`${BASE_URL}/api/inventories`);
  //     setInventories(data);
  //   } catch (error) {
  //     console.error("Error fetching warehouses:", error);
  //   }
  // };

  const [itemToDelete, setItemToDelete] = useState(null);

  function deleteItemHandler(item) {
    setItemToDelete(item);
  }

  useEffect(() => {
    getInventories();
  }, [inventories, itemToDelete]);

  if (!inventories) return <div>Loading items...</div>;

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
          <NavLink to="/inventory/add" className="button button-primary">
            + Add New Item
          </NavLink>
        </div>

          <div className="table-header">
           <div className="inventory__mobile-box">
              <div className="table-header__item table-header__title">
                <span className="table-header__text">Inventory Item</span>
                <button className="table__sort-btn" onClick={() => handleSort("item_name")}>
                <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
                </button>
              </div>

              <div className="table-header__status table-header__title">
                <span className="table-header__text">Status</span>
                <button className="table__sort-btn" onClick={() => handleSort("status")}>
                <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
                </button>
              </div>

              <div className="table-header__category table-header__title">
                <span className="table-header__text">Category</span>
                <button className="table__sort-btn" onClick={() => handleSort("category")}>
                <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
                </button>
              </div>

              <div className="table-header__quantity table-header__title">
                <span className="table-header__text">QTY</span>
                <button className="table__sort-btn" onClick={() => handleSort("quantity")}>
                <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
                </button>
              </div>
            </div>

              <div className="table-header__warehouse table-header__title">
                <span className="table-header__text">Warehouse</span>
                <button className="table__sort-btn" onClick={() => handleSort("warehouse_id")}>
                <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
                </button>
              </div>

            <div className="table-header__actions">
              <span className="table-header__text">Actions</span>
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
