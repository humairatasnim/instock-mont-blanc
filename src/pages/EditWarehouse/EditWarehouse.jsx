import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import "./EditWarehouse.scss";
import backbutton from "../../assets/icons/arrow_back-24px.svg"
import { Link } from "react-router-dom"


function EditWarehouse({warehouses}) {
  return (
    <div className="container">
      <section className="title-container">
        <Link to="/warehouses/">
          <img className="icon" src={backbutton}/>
        </Link>
        <h1 className="page-header">Edit Warehouse</h1>
      </section>
      
      <WarehouseForm warehouses={warehouses} action={"Save"}/>
    </div>
  );
}

export default EditWarehouse;
