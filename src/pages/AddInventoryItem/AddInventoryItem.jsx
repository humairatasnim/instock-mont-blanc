import { Link } from "react-router-dom";
import InventoryItemForm from "../../components/InventoryItemForm/InventoryItemForm";
import backIcon from "/src/assets/icons/arrow_back-24px.svg";
import "./AddInventoryItem.scss";

function AddInventoryItem({ warehouses }) {
  return (
    <main className="container">
      <section className="panel add-item">
        <div className="add-item__header">
          <Link to="/inventory" className="icon">
            <img
              src={backIcon}
              alt="Back icon"
              className="icon add-item__back-icon"
            />
          </Link>
          <h1 className="add-item__title">Add New Inventory Item</h1>
        </div>

        <div className="add-item__body">
          <InventoryItemForm warehouses={warehouses} />
        </div>
      </section>
    </main>
  );
}

export default AddInventoryItem;
