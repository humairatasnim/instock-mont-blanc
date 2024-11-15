import "./InventoryItemDetails.scss";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
// import editIcon from "../../assets/icons/edit-24px.svg";
const BASE_URL = import.meta.env.VITE_API_URL;

function InventoryItemDetails({warehouses}) {
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

  if (!selectedItem) return <div>Loading item details...</div>;

  const { item_name, description, category, status, quantity, warehouse_id } = selectedItem[0];
  const {warehouse_name} =warehouses.find((warehouse) => warehouse.id == warehouse_id);

  return (
    <>
      <main className="container inventory-item">
        <section className="panel inventory-item__header">
          <h1 className="page-header">{item_name}</h1>
          <div className="inventory-item__description">
          <p className="inventory-item__category table__header-text"> Item Description:</p>
            <p>{description}</p>
          </div>
          <div className="inventory-item__info">
            <p className="inventory-item__category table__header-text"> CATEGORY:</p>
            <p className="body-medium">{category}</p>
            
            <p className="inventory-item__status table__header-text">Status:</p>
            <div className={status === "In Stock" ? "tag in-stock" : "tag out-of-stock"}>{status}</div>
            <p className="inventory-item__warehouse table__header-text"> WAREHOUSE:</p>
            <p className="body-medium">{warehouse_name}</p>
            <p className="inventory-item__warehouse table__header-text"> Quantity:</p>
            <p className="body-medium">{quantity}</p>

          </div>

        </section>
      </main>
    </>
  );
}

export default InventoryItemDetails;
