import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dropdown from "react-dropdown";
import errorIcon from "/src/assets/icons/error-24px.svg";
import "react-dropdown/style.css";
import "./InventoryItemForm.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function InventoryItemForm({ warehouses }) {
  const categoryOptions = [
    { value: "Electronics", label: "Electronics" },
    { value: "Gear", label: "Gear" },
    { value: "Health", label: "Health" },
  ];

  const warehouseOptions = warehouses.map((warehouse) => ({
    value: warehouse.id,
    label: warehouse.warehouse_name,
  }));

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/inventory");
  };

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(null);
  const [status, setStatus] = useState("In Stock");
  const [quantity, setQuantity] = useState(0);
  const [warehouse, setWarehouse] = useState(null);

  const [itemNameError, setItemNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);
  const [warehouseError, setWarehouseError] = useState(false);

  const handleNameChange = (event) => {
    setItemName(event.target.value);
    setItemNameError(false);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    setDescriptionError(false);
  };

  const handleCategorySelect = (selectedOption) => {
    setCategory(selectedOption);
    setCategoryError(false);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
    setQuantityError(false);
  };

  const handleWarehouseSelect = (selectedOption) => {
    setWarehouse(selectedOption);
    setWarehouseError(false);
  };

  const validateForm = () => {
    let isValid = true;

    if (!itemName.trim()) {
      setItemNameError(true);
      isValid = false;
    }

    if (!description.trim()) {
      setDescriptionError(true);
      isValid = false;
    }

    if (!category) {
      setCategoryError(true);
      isValid = false;
    }

    if (!warehouse) {
      setWarehouseError(true);
      isValid = false;
    }

    if (status === "In Stock" && (quantity === "" || quantity === 0)) {
      setQuantityError(true);
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

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
        const { data } = await axios.post(`${BASE_URL}/api/inventories`, formData);
        const inventoryItemId = data[0].id;
        alert("Inventory item added successfully!");
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
              className={`form__input ${itemNameError ? "error" : ""}`}
              type="text"
              name="item_name"
              placeholder="Item Name"
              value={itemName}
              onChange={handleNameChange}
            />
            {itemNameError && (
              <div className="form__error">
                <img src={errorIcon} alt="Error Icon" className="form__error-icon" />
                <span className="form__error-message">This field is required</span>
              </div>
            )}
          </fieldset>
          <fieldset className="form__field">
            <label className="form__label" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              className={`form__textarea ${descriptionError ? "error" : ""}`}
              name="description"
              placeholder="Please enter a brief item description..."
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
            {descriptionError && (
              <div className="form__error">
                <img src={errorIcon} alt="Error Icon" className="form__error-icon" />
                <span className="form__error-message">This field is required</span>
              </div>
            )}
          </fieldset>
          <fieldset className="form__field">
            <label className="form__label" htmlFor="category">
              Category
            </label>
            <Dropdown
              id="category"
              controlClassName={`form__dropdown ${
                categoryError ? "error" : ""
              }`}
              placeholderClassName="form__dropdown--placeholder"
              menuClassName="form__dropdown--menu"
              options={categoryOptions}
              placeholder="Please select"
              value={category}
              onChange={handleCategorySelect}
            />
            {categoryError && (
              <div className="form__error">
                <img src={errorIcon} alt="Error Icon" className="form__error-icon" />
                <span className="form__error-message">This field is required</span>
              </div>
            )}
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
                className={`form__input ${quantityError ? "error" : ""}`}
                type="number"
                name="quantity"
                min="0"
                value={quantity}
                onChange={handleQuantityChange}
              />
              {quantityError && (
                <div className="form__error">
                  <img src={errorIcon} alt="Error Icon" className="form__error-icon" />
                  <span className="form__error-message">This field is required</span>
                </div>
              )}
            </fieldset>
          )}
          <fieldset className="form__field">
            <label className="form__label" htmlFor="warehouse">
              Warehouse
            </label>
            <Dropdown
              id="warehouse"
              controlClassName={`form__dropdown ${
                warehouseError ? "error" : ""
              }`}
              placeholderClassName="form__dropdown--placeholder"
              menuClassName="form__dropdown--menu"
              options={warehouseOptions}
              placeholder="Please select"
              value={warehouse}
              onChange={handleWarehouseSelect}
            />
            {warehouseError && (
              <div className="form__error">
                <img src={errorIcon} alt="Error Icon" className="form__error-icon" />
                <span className="form__error-message">This field is required</span>
              </div>
            )}
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
