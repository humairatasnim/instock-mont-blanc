import { NavLink } from "react-router-dom";
import "./WarehouseDetails.scss";
import arrowBack from "/src/assets/icons/arrow_back-24px.svg";
import InventoryItem from "../../components/InventoryItem/InventoryItem";

function WarehouseDetails({ inventories }) {
  return (
    <>
      <main className="container">
        <div className="warehouse">
          {/* WAREHOUSE HEADER */}
          <div className="warehouse__header">
            <div className="warehouse__title">
              <NavLink className="warehouse__navlink">
                <img
                  className="link__icon"
                  src={arrowBack}
                  alt="arrow to return to /warehouses"
                ></img>
              </NavLink>
              {/* NEED TO REMOVE built-in style */}
              <h2 className="warehouse__name">Washington</h2>
            </div>
            <button className="button button-primary warehouse__edit">
              Edit
            </button>
          </div>
          {/* WAREHOUSE DETAILS */}
          <div className="warehouse__details">
            <div className="warehouse__address">
              <p className="warehouse__subtitle">WAREHOUSE ADDRESS:</p>
              <p className="body-medium">street address</p>
              {/*JS TO GET DATA */}
            </div>
            <div className="warehouse__contact">
              <div className="warehouse__column">
                <p className="warehouse__subtitle">CONTACT NAME:</p>
                <p className="body-medium">contact name</p>
                {/*JS TO GET DATA */}
                <p className="body-medium">position</p>
                {/*JS TO GET DATA */}
              </div>
              <div className="warehouse__column">
                <p className="warehouse__subtitle">CONTACT INFORMATION:</p>
                <p className="body-medium">Phone Mumber</p>
                {/*JS TO GET DATA */}
                <p className="body-medium">email</p> {/*JS TO GET DATA */}
              </div>
            </div>
          </div>
          {/* WAREHOUSE INVENTORY LIST */}
          <div className="invetory-table">
            <div className="table-header"></div>
            <div className="invetory-list"></div>
            {/* <ul> */}
            {/* <li> */}
            <InventoryItem />
            <InventoryItem />

            {/* </li> */}
            {/* {inventory.map((item) => {return (
                  <li><InventoryItem/></li>
                )}
              )} */}
            {/* </ul> */}
          </div>
        </div>
      </main>
    </>
  );
}

export default WarehouseDetails;
