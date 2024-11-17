import "./InventoryItemDetails.scss";
import {NavLink,useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import editWhite from "/src/assets/icons/edit-white-24px.svg";
import arrowBack from "../../assets/icons/arrow_back-24px.svg"
const BASE_URL = import.meta.env.VITE_API_URL;

function InventoryItemDetails({ warehouses, path }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const { id } = useParams();

  const getInventoryItem = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/inventories/${id}`);
      setSelectedItem(data);
    } catch (error) {
      alert(`Error retrieving details for inventory item with id: ${id}`);
    }
  };
  useEffect(() => {
    getInventoryItem();
  }, [id]);

  const returnUrl = () => {
    if (window.history.length > 1) {
      window.history.back();
    }
  };

  if (!selectedItem) return <div>Loading item details...</div>;

  const { item_name, description, category, status, quantity, warehouse_id } = selectedItem[0];
  const { warehouse_name } = warehouses.find((warehouse) => warehouse.id == warehouse_id);

  return (
    <>
      <main className="container ">
        <div className="panel">
          <div className="inventory-item">
            <div className="inventory-item__header">
              <div className="inventory-item__title">
                <img className="link__icon inventory-item__back-icon" src={arrowBack} alt="arrow to return to previous page" onClick={returnUrl}></img>
                <h1 className="page-header inventory-item__heading">{item_name}</h1>
              </div>
              <NavLink to={`/inventory/${id}/edit`} className="inventory-item__edit link">
                <img className="icon" src={editWhite}></img>
                <span className="inventory-item__edit--hidden">Edit</span>
              </NavLink>
            </div>
            <div className="inventory-item__body">
              <div className="inventory-item__info">
                <div className="inventory-item__description">
                  <p className="inventory-item__subtitle table__header-text">Item Description:</p>
                  <p className="body-medium">{description}</p>
                </div>

                <div className="inventory-item__category">
                  <p className="inventory-item__subtitle table__header-text"> CATEGORY:</p>
                  <p className="body-medium">{category}</p>
                </div>
              </div>
              <div className="inventory-item__content">
                <div className="inventory-item__details">
                  <div className="inventory-item__status">
                    <p className="inventory-item__subtitle  table__header-text">Status:</p>
                    <div className={status === "In Stock" ? "tag in-stock" : "tag out-of-stock"}>{status}</div>
                  </div>
                  <div className="inventory-item__quantity">
                    <p className="inventory-item__subtitle table__header-text"> Quantity:</p>
                    <p className="body-medium">{quantity}</p>
                  </div>
                </div>
                <div className="inventory-item__warehouse">
                  <p className=" inventory-item__subtitle table__header-text"> WAREHOUSE:</p>
                  <p className="body-medium">{warehouse_name}</p>
                </div>
              </div>

            </div>


          </div>
        </div>
      </main>
    </>
  );
}

export default InventoryItemDetails;
