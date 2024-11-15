import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dropdown from "react-dropdown";
import errorIcon from "/src/assets/icons/error-24px.svg";
import "react-dropdown/style.css";
import "./InventoryItemForm.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function InventoryItemForm({ warehouses, item }) {
  
  // Get list of inventory categories for Category dropdown
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/inventories/categories`);
      setCategoryList(data);
    } catch (error) {
      console.error("Error fetching inventory categories:", error);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  if (!categoryList) return <div>Loading...</div>;

  // Get list of warehouses for Warehouse dropdown
  const warehouseList = warehouses.map(warehouse => ({
    value: warehouse.id,
    label: warehouse.warehouse_name,
  }));

  // Handle cancel
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/inventory");
  };

  // State for form fields
  const [itemName, setItemName] = useState(item?.item_name || "");
  const [description, setDescription] = useState(item?.description || "");
  const [category, setCategory] = useState(null);
  const [status, setStatus] = useState(item?.status || "In Stock");
  const [quantity, setQuantity] = useState(item?.quantity || 0);
  const [warehouse, setWarehouse] = useState(item ? warehouseList.find(option => option.value === item.warehouse_id) : null);

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

  // Handle form validation
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

  // Handle form submission (for both add and edit)
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

    const submitInventoryItem = async () => {
      try {
        if (item) {
          // Edit existing inventory item
          const { data } = await axios.put(`${BASE_URL}/api/inventories/${item.id}`, formData);
          alert("Inventory item updated successfully!");
          navigate(`/inventory/${item.id}`);
        } else {
          // Add new inventory item
          const { data } = await axios.post(`${BASE_URL}/api/inventories`, formData);
          const inventoryItemId = data[0].id;
          alert("Inventory item added successfully!");
          navigate(`/inventory/${inventoryItemId}`);
        }
      } catch (error) {
        console.error("Error submitting inventory item:", error);
      }
    };

    submitInventoryItem();
  };

  return (
    <form className="inventory-form" onSubmit={handleSubmit}>
      <section className="inventory-form__section">
        <h2 className="inventory-form__heading">Item Details</h2>
        <div className="inventory-form__fields">
          <fieldset className="inventory-form__field">
            <label className="inventory-form__label" htmlFor="item_name">Item Name</label>
            <input
              id="item_name"
              className={`inventory-form__input ${itemNameError ? "error" : ""}`}
              type="text"
              name="item_name"
              placeholder="Item Name"
              value={itemName}
              onChange={handleNameChange}
            />
            {itemNameError && (
              <div className="inventory-form__error">
                <img src={errorIcon} alt="Error Icon" className="inventory-form__error-icon" />
                <span className="inventory-form__error-message">This field is required</span>
              </div>
            )}
          </fieldset>
          <fieldset className="inventory-form__field">
            <label className="inventory-form__label" htmlFor="description">Description</label>
            <textarea
              id="description"
              className={`inventory-form__textarea ${descriptionError ? "error" : ""}`}
              name="description"
              placeholder="Please enter a brief item description..."
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
            {descriptionError && (
              <div className="inventory-form__error">
                <img src={errorIcon} alt="Error Icon" className="inventory-form__error-icon" />
                <span className="inventory-form__error-message">This field is required</span>
              </div>
            )}
          </fieldset>
          <fieldset className="inventory-form__field">
            <label className="inventory-form__label" htmlFor="category">Category</label>
            <Dropdown
              id="category"
              controlClassName={`inventory-form__dropdown ${categoryError ? "error" : ""}`}
              placeholderClassName="inventory-form__dropdown--placeholder"
              menuClassName="inventory-form__dropdown--menu"
              options={categoryList}
              placeholder="Please select"
              value={item?.category}
              onChange={handleCategorySelect}
            />
            {categoryError && (
              <div className="inventory-form__error">
                <img src={errorIcon} alt="Error Icon" className="inventory-form__error-icon" />
                <span className="inventory-form__error-message">This field is required</span>
              </div>
            )}
          </fieldset>
        </div>
      </section>
      <section className="inventory-form__section">
        <h2 className="inventory-form__heading">Item Availability</h2>
        <div className="inventory-form__fields">
          <fieldset className="inventory-form__field">
            <label className="inventory-form__label">Status</label>
            <div className="inventory-form__radio-group">
              <div className="inventory-form__radio-item">
                <input
                  id="in-stock"
                  className="inventory-form__radio-input"
                  type="radio"
                  name="status"
                  value="In Stock"
                  checked={status === "In Stock"}
                  onChange={handleStatusChange}
                />
                <label className="inventory-form__radio-label" htmlFor="in-stock">In Stock</label>
              </div>
              <div className="inventory-form__radio-item">
                <input
                  id="out-of-stock"
                  className="inventory-form__radio-input"
                  type="radio"
                  name="status"
                  value="Out of Stock"
                  checked={status === "Out of Stock"}
                  onChange={handleStatusChange}
                />
                <label className="inventory-form__radio-label" htmlFor="out-of-stock">Out of Stock</label>
              </div>
            </div>
          </fieldset>
          {status === "In Stock" && (
            <fieldset className="inventory-form__field">
              <label className="inventory-form__label" htmlFor="quantity">Quantity</label>
              <input
                id="quantity"
                className={`inventory-form__input ${quantityError ? "error" : ""}`}
                type="number"
                name="quantity"
                min="0"
                value={quantity}
                onChange={handleQuantityChange}
              />
              {quantityError && (
                <div className="inventory-form__error">
                  <img src={errorIcon} alt="Error Icon" className="inventory-form__error-icon" />
                  <span className="inventory-form__error-message">This field is required</span>
                </div>
              )}
            </fieldset>
          )}
          <fieldset className="inventory-form__field">
            <label className="inventory-form__label" htmlFor="warehouse">Warehouse</label>
            <Dropdown
              id="warehouse"
              controlClassName={`inventory-form__dropdown ${warehouseError ? "error" : ""}`}
              placeholderClassName="inventory-form__dropdown--placeholder"
              menuClassName="inventory-form__dropdown--menu"
              options={warehouseList}
              placeholder="Please select"
              value={warehouse}
              onChange={handleWarehouseSelect}
            />
            {warehouseError && (
              <div className="inventory-form__error">
                <img src={errorIcon} alt="Error Icon" className="inventory-form__error-icon" />
                <span className="inventory-form__error-message">This field is required</span>
              </div>
            )}
          </fieldset>
        </div>
      </section>
      <div className="inventory-form__actions">
        <button
          type="button"
          className="button button-secondary"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button type="submit" className="button button-primary">
          {item ? "Save" : "+ Add Item"}
        </button>
      </div>
    </form>
  );
}

export default InventoryItemForm;