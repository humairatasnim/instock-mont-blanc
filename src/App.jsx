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
  const [warehouses, setWarehouses] = useState(null);
  const [inventories, setInventories] = useState(null);

  const getWarehouses = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/warehouses`);
      setWarehouses(data);
    } catch (error) {
      console.error("Error fetching warehouses:", error);
    }
  };

  const getInventories = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/inventories`);
      setInventories(data);
    } catch (error) {
      console.error("Error fetching warehouses:", error);
    }
  };

  useEffect(() => {
    getWarehouses();
  }, []);


  useEffect(() => {
    getInventories();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      {(!warehouses || !inventories) ? (
        <div>Loading data...</div>
      ) : (
      <Routes>
        {/* Homepage - Warehouses list */}
        <Route path="/" element={<Warehouses warehouses={warehouses} />} />

        {/* Warehouse routes */}
        <Route path="/warehouses" element={<Warehouses warehouses={warehouses} />} />
        <Route path="/warehouses/:id" element={<WarehouseDetails warehouses={warehouses}/>}/>
        <Route path="/warehouses/add" element={<AddWarehouse warehouses={warehouses}/>} />
        <Route path="/warehouses/:id/edit" element={<EditWarehouse warehouses={warehouses}/>} />

        {/* Inventory routes */}
        <Route path="/inventory" element={<Inventory inventories={inventories} warehouses={warehouses} />} />
        <Route path="/inventory/:id" element={<InventoryItemDetails inventories={inventories} warehouses={warehouses} />} />
        <Route path="/inventory/add" element={<AddInventoryItem />} />
        <Route path="/inventory/:id/edit" element={<EditInventoryItem />} />

        {/* TEMPORARY: UI Library Route */}
        <Route path="/ui" element={<UILibrary />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>)}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
