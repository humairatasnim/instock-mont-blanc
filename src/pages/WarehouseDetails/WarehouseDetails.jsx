import { NavLink, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./WarehouseDetails.scss";
import arrowBack from "/src/assets/icons/arrow_back-24px.svg";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import editWhite from "/src/assets/icons/edit-white-24px.svg";
import sortIcon from "/src/assets/icons/sort-24px.svg";
import Modal from "../../components/Modal/Modal";
const BASE_URL = import.meta.env.VITE_API_URL;

function WarehouseDetails({ warehouses }) {
  const [inventories, setInventories] = useState([]);
  const [itemToDelete, setItemToDelete] = useState(null);

  function deleteItemHandler(item) {
    setItemToDelete(item);
  }
  const { id } = useParams();

  const [sortOrder, setSortOrder] = useState("asc");

  const warehouse = warehouses.find((wh)=>(wh.id == id));

  const {
    warehouse_name,
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  } = warehouse || {};

  const getInventories = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/warehouses/${id}/inventories`
      );
      setInventories(data);
    } catch (error) {
      console.log(
        `Error getting inventories for warehouse with ID ${id}`,
        error
      );
    }
  };

  useEffect(() => {
    getInventories();
  }, [itemToDelete]);

//SortBy Function 

const handleSort = async (sortBy = "item_name" || "category" || "status" || "quantity" || "warehouse_id") =>  {
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

    useEffect(() => {
      setInventories(inventories);
    }, [inventories]);
  

  return (
    <>
      <main className="container">
      <Modal
        item={itemToDelete}
        type={'item'}
        onClose={() => setItemToDelete(null)}
      />
        <div className="warehouse">
          {/* WAREHOUSE item-header */}
          <div className="warehouse__header">
            <div className="warehouse__title">
              <NavLink to="/warehouses" className="link">
                <img
                  className="warehouse__back-icon"
                  src={arrowBack}
                  alt="arrow to return to /warehouses"
                ></img>
              </NavLink>
              <h1 className="warehouse__name">{warehouse_name}</h1>
            </div>
            <NavLink to={`/warehouses/${id}/edit`} className="warehouse__edit link">
              <img className="link__icon" src={editWhite}></img>
              <span className="warehouse__edit--hidden">Edit</span>
            </NavLink>
          </div>
          {/* WAREHOUSE DETAILS */}
          <div className="warehouse__details">
            <div className="warehouse__address">
              <p className="warehouse__subtitle">WAREHOUSE ADDRESS:</p>
              <p className="body-medium">{address}</p>
              <p className="body-medium">{`${city}, ${country}`}</p>
            </div>
            <div className="warehouse__contact">
              <div className="warehouse__column">
                <p className="warehouse__subtitle">CONTACT NAME:</p>
                <p className="body-medium">{contact_name}</p>
                <p className="body-medium">{contact_position}</p>
              </div>
              <div className="warehouse__column">
                <p className="warehouse__subtitle">CONTACT INFORMATION:</p>
                <p className="body-medium">{contact_phone}</p>
                <p className="body-medium">{contact_email}</p>
              </div>
            </div>
          </div>
          {/* TABLET/DESKTOP LIST item-header */}
          {inventories.length > 0 ? (
          <div className="item-header">
            <div className="item-header__box">
              <div className="item-header__item item-header__title">
                <h4>INVENTORY ITEM</h4>
                <button className="table__sort-btn" onClick={() => handleSort("item_name")}>
                <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
                </button> 
              </div>
              <div className="item-header__status item-header__title">
                <h4>STATUS</h4>
                <button className="table__sort-btn" onClick={() => handleSort("status")}>
                  <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
                </button>
              </div>
              <div className="item-header__category item-header__title">
                <h4>CATEGORY</h4>
                <button className="table__sort-btn" onClick={() => handleSort("category")}>
                  <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
                </button>
              </div>
              <div className="item-header__quantity item-header__title">
                <h4>QUANTITY</h4>
                <button className="table__sort-btn" onClick={() => handleSort("quantity")}>
                  <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
                </button>
              </div>
            </div>
            <div className="item-header__actions">
              <h4>ACTIONS</h4>
            </div>
          </div>
          ) : (
            <div className="warehouse__empty-state">
              <p className="warehouse__empty-state-text">Your inventory is currently empty. Add some items to get started!</p>
              <Link to="/inventory/add" className="button button-primary">+ Add New Item</Link>
            </div>
          )}
          {/* WAREHOUSE INVENTORY LIST */}
          <div className="invetory-list"></div>
          <ul>
            {inventories.length > 0 &&
              inventories.map((item) => (
                  <InventoryItem key={item.id} item={item} deleteHandler={deleteItemHandler}/>
              ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default WarehouseDetails;
