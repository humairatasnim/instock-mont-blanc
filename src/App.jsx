import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Warehouses from "./pages/Warehouses/Warehouses";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import Inventory from "./pages/Inventory/Inventory";
import InventoryItemDetails from "./pages/InventoryItemDetails/InventoryItemDetails";
import AddInventoryItem from "./pages/AddInventoryItem/AddInventoryItem";
import EditInventoryItem from "./pages/EditInventoryItem/EditInventoryItem";
import UILibrary from "./pages/UILibrary/UILibrary";
import "./App.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function App() {
  const [warehouses, setWarehouses] = useState([]);

  const getWarehouse = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/warehouses`);
      setWarehouses(data);
    } catch (error) {
      console.log("Error getting warehouse list");
    }
  }

  useEffect(() => {
    getWarehouse();
  }, []);

  if (!warehouses) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Homepage - Warehouses list */}
        <Route path="/" element={<Warehouses />} />

        {/* Warehouse routes */}
        <Route path="/warehouses" element={<Warehouses />} />
        <Route
          path="/warehouses/:id"
          element={<WarehouseDetails warehouses={warehouses} />}
        />
        <Route path="/warehouses/add" element={<AddWarehouse />} />
        <Route path="/warehouses/:id/edit" element={<EditWarehouse />} />

        {/* Inventory routes */}
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:id" element={<InventoryItemDetails />} />
        <Route path="/inventory/add" element={<AddInventoryItem />} />
        <Route path="/inventory/:id/edit" element={<EditInventoryItem />} />

        {/* TEMPORARY: UI Library Route */}
        <Route path="/ui" element={<UILibrary />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
