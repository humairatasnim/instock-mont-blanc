import { NavLink } from "react-router-dom";
import "./WarehouseDetails.scss";
import arrowBack from "/src/assets/icons/arrow_back-24px.svg";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import editWhite from "/src/assets/icons/edit-white-24px.svg";
import sortIcon from "/src/assets/icons/sort-24px.svg";

function WarehouseDetails({ inventories }) {
  return (
    <>
      <main className="container">
        <div className="warehouse">
          {/* WAREHOUSE HEADER */}
          <div className="warehouse__header">
            <div className="warehouse__title">
              <NavLink to="/warehouses" className="link">
                <img
                  className="link__icon"
                  src={arrowBack}
                  alt="arrow to return to /warehouses"
                ></img>
              </NavLink>
              {/* NEED TO REMOVE built-in style */}
              <h2 className="warehouse__name">Washington</h2>
            </div>
            <NavLink to="/warehouses/:id/edit" className="warehouse__edit link">
              <img className="link__icon" src={editWhite}></img>
              <span className="warehouse__edit--hidden">Edit</span>
            </NavLink>
          </div>
          {/* WAREHOUSE DETAILS */}
          <div className="warehouse__details">
            <div className="warehouse__address">
              <p className="warehouse__subtitle">WAREHOUSE ADDRESS:</p>
              <p className="body-medium">
                Street Address<br></br>Street Address
              </p>
              {/*JS TO GET DATA */}
            </div>
            <div className="warehouse__contact">
              <div className="warehouse__column">
                <p className="warehouse__subtitle">CONTACT NAME:</p>
                <p className="body-medium">Contact Name</p>
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
          {/* TABLET/DESKTOP LIST HEADER */}
          <div className="header">
            <div className="header__box">
              <div className="header__item header__title">
                <span className="header__text">Invetory Item</span>
                <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
              </div>
              <div className="header__status header__title">
                <span className="header__text">Status</span>
                <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
              </div>
              <div className="header__category header__title">
                <span className="header__text">Category</span>
                <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
              </div>
              <div className="header__quantity header__title">
                <span className="header__text">Quantity</span>
                <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
              </div>
            </div>
            <div className="header__actions">
              <span className="header__text">Actions</span>
            </div>
          </div>
          {/* WAREHOUSE INVENTORY LIST */}
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
      </main>
    </>
  );
}

export default WarehouseDetails;
