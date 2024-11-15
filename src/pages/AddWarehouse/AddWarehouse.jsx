import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import "./AddWarehouse.scss";
import backbutton from "../../assets/icons/arrow_back-24px.svg"
import { Link } from "react-router-dom"

function AddWarehouse({warehouses}) {
  return (
    <div className="container">
    <section className="warehouse">
    <section className="formcontainer__title">
      <Link to="/warehouses">
        <img className="icon" src={backbutton}/>
      </Link>
      <h1 className="page-header">Add Warehouse</h1>
    </section>
    
    <WarehouseForm warehouses={warehouses} action={"add"}/>
    </section>
  </div>
  );
}

export default AddWarehouse;
