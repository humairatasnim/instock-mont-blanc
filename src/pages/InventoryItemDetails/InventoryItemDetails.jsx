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

function InventoryItemDetails() {
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
    console.log(selectedItem.item_name);
  },[id]);

  if (!selectedItem) return <div>Loading item details...</div>;

  let {item_name,description,category, status, quantity}=selectedItem;

  return (
    <>
      <main className="container">
        <section className="panel">
          <h1 className="page-header">{item_name}</h1>
        </section>
      </main>
    </>
  );
}

export default InventoryItemDetails;
