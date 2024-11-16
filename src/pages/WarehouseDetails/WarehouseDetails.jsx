import { NavLink, useParams, useNavigate } from "react-router-dom";
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
  const { id } = useParams();

  const [itemToDelete, setItemToDelete] = useState(null);

  function deleteItemHandler(item) {
    setItemToDelete(item);
  }


  const {
    warehouse_name,
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  } = warehouses[id - 1] || {};

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

  return (
    <>
      <main className="container">
      <Modal
        item={itemToDelete}
        type={'item'}
        onClose={() => setItemToDelete(null)}
      />
        <div className="warehouse">
          {/* WAREHOUSE table-header */}
          <div className="warehouse__header">
            <div className="warehouse__title">
              <NavLink to="/warehouses" className="link">
                <img
                  className="link__icon"
                  src={arrowBack}
                  alt="arrow to return to /warehouses"
                ></img>
              </NavLink>
              <h2 className="warehouse__name">{warehouse_name}</h2>
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
          {/* TABLET/DESKTOP LIST table-header */}
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
          {/* WAREHOUSE INVENTORY LIST */}
          <div className="invetory-list"></div>
          <ul>
            {inventories.length > 0 &&
              inventories.map((item) => (
                <li key={item.id}>
                  <InventoryItem item={item} deleteHandler={deleteItemHandler} />
                </li>
              ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default WarehouseDetails;
