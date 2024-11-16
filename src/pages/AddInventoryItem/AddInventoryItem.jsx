import { useNavigate } from "react-router-dom";
import InventoryItemForm from "../../components/InventoryItemForm/InventoryItemForm";
import backIcon from "/src/assets/icons/arrow_back-24px.svg";
import "./AddInventoryItem.scss";

function AddInventoryItem({ warehouses }) {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <main className="container">
      <section className="panel add-item">
        <div className="add-item__header">
          <button onClick={handleBackButton} className="link">
            <img src={backIcon} alt="Back icon" className="icon add-item__back-icon" />
          </button>
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
