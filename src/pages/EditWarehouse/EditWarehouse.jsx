import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import "./EditWarehouse.scss";
import backbutton from "../../assets/icons/arrow_back-24px.svg"


function EditWarehouse() {
  return (
    <div className="container">
      <section className="title-container">
        <img className="icon" src={backbutton}/>
        <h1 className="page-header">Edit Warehouse</h1>
      </section>
      
      <WarehouseForm action={"Save"}/>
    </div>
  );
}

export default EditWarehouse;
