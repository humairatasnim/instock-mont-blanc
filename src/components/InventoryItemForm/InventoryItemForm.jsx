import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./InventoryItemForm.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function InventoryItemForm({ warehouses }) {
  const navigate = useNavigate();

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(null);
  const [status, setStatus] = useState("In Stock");
  const [quantity, setQuantity] = useState(0);
  const [warehouse, setWarehouse] = useState(null);

  const categoryOptions = [
    { value: "Electronics", label: "Electronics" },
    { value: "Gear", label: "Gear" },
    { value: "Health", label: "Health" },
  ];

  const warehouseOptions = warehouses.map((warehouse) => ({
    value: warehouse.id,
    label: warehouse.warehouse_name,
  }));

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategorySelect = (selectedOption) => {
    setCategory(selectedOption);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleWarehouseSelect = (selectedOption) => {
    setWarehouse(selectedOption);
  };

  const handleCancel = () => {
    navigate("/inventory");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!itemName) {
      alert("Please enter the item name.");
      return;
    }
  
    if (!description) {
      alert("Please enter a description.");
      return;
    }
  
    if (!category) {
      alert("Please select a category.");
      return;
    }
  
    if (!warehouse) {
      alert("Please select a warehouse.");
      return;
    }
  
    if (!quantity) {
      alert("Please enter a quantity.");
      return;
    }

    const formData = {
      item_name: itemName,
      description,
      category: category.value,
      status,
      quantity: status === "Out of Stock" ? 0 : parseInt(quantity, 10),
      warehouse_id: warehouse.value,
    };

    const createInventoryItem = async () => {
      try {
        const response = await axios.post(
          `${BASE_URL}/api/inventories`,
          formData
        );
        const inventoryItemId = response.data.id;
        alert("Inventory item added successfully");
        navigate(`/inventory/${inventoryItemId}`);
      } catch (error) {
        console.error("Error creating inventory item:", error);
      }
    };
    createInventoryItem();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <section className="form__section">
        <h2 className="form__heading">Item Details</h2>
        <div className="form__fields">
          <fieldset className="form__field">
            <label className="form__label" htmlFor="item_name">
              Item Name
            </label>
            <input
              id="item_name"
              className="form__input"
              type="text"
              name="item_name"
              placeholder="Item Name"
              value={itemName}
              onChange={handleNameChange}
            />
          </fieldset>
          <fieldset className="form__field">
            <label className="form__label" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              className="form__textarea"
              name="description"
              placeholder="Please enter a brief item description..."
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </fieldset>
          <fieldset className="form__field">
            <label className="form__label" htmlFor="category">
              Category
            </label>
            <Dropdown
              id="category"
              controlClassName="form__dropdown"
              placeholderClassName="form__dropdown--placeholder"
              menuClassName="form__dropdown--menu"
              options={categoryOptions}
              placeholder="Please select"
              value={category}
              onChange={handleCategorySelect}
            />
          </fieldset>
        </div>
      </section>
      <section className="form__section">
        <h2 className="form__heading">Item Availability</h2>
        <div className="form__fields">
          <fieldset className="form__field">
            <label className="form__label">Status</label>
            <div className="form__radio-group">
              <div className="form__radio-item">
                <input
                  id="in-stock"
                  className="form__radio-input"
                  type="radio"
                  name="status"
                  value="In Stock"
                  checked={status === "In Stock"}
                  onChange={handleStatusChange}
                />
                <label className="form__radio-label" htmlFor="in-stock">
                  In Stock
                </label>
              </div>
              <div className="form__radio-item">
                <input
                  id="out-of-stock"
                  className="form__radio-input"
                  type="radio"
                  name="status"
                  value="Out of Stock"
                  checked={status === "Out of Stock"}
                  onChange={handleStatusChange}
                />
                <label className="form__radio-label" htmlFor="out-of-stock">
                  Out of Stock
                </label>
              </div>
            </div>
          </fieldset>
          {status === "In Stock" && (
            <fieldset className="form__field">
              <label className="form__label" htmlFor="quantity">
                Quantity
              </label>
              <input
                id="quantity"
                className="form__input"
                type="number"
                name="quantity"
                min="0"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </fieldset>
          )}
          <fieldset className="form__field">
            <label className="form__label" htmlFor="warehouse">
              Warehouse
            </label>
            <Dropdown
              id="warehouse"
              controlClassName="form__dropdown"
              placeholderClassName="form__dropdown--placeholder"
              menuClassName="form__dropdown--menu"
              options={warehouseOptions}
              placeholder="Please select"
              value={warehouse}
              onChange={handleWarehouseSelect}
            />
          </fieldset>
        </div>
      </section>
      <div className="form__actions">
        <button
          type="button"
          className="button button-secondary"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button type="submit" className="button button-primary">
          + Add Item
        </button>
      </div>
    </form>
  );
}

export default InventoryItemForm;
