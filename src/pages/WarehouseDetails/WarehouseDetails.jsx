import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import "./WarehouseDetails.scss";
import arrowBack from "/src/assets/icons/arrow_back-24px.svg";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import editWhite from "/src/assets/icons/edit-white-24px.svg";
import sortIcon from "/src/assets/icons/sort-24px.svg";

function WarehouseDetails({ warehouses }) {
  const [inventories, setInvetories] = useState([]);

  const { id } = useParams();

  const warehouse = warehouses[id];

  // const getInventories = async () => {
  //   try {
  //     const { data } = await axios.get(`${BASE_URL}/warehouses/${id}/inventories`);
  //     setInvetories(data);
  //   } catch (error) {
  //     console.log("Error getting warehouse list");
  //   }
  // };

  // useEffect(() => {
  //   getInventories();
  // }, []);

  // if (inventories.length === 0) {
  //   return <div>Loading...</div>;
  // }

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
              <h2 className="warehouse__name">{warehouse.warehouse_name}</h2>
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
              <p className="body-medium">{warehouse.address}</p>
              <p className="body-medium">
                {`${warehouse.city}, ${warehouse.country}`}
              </p>
            </div>
            <div className="warehouse__contact">
              <div className="warehouse__column">
                <p className="warehouse__subtitle">CONTACT NAME:</p>
                <p className="body-medium">{warehouse.contact_name}</p>
                <p className="body-medium">{warehouse.contact_position}</p>
              </div>
              <div className="warehouse__column">
                <p className="warehouse__subtitle">CONTACT INFORMATION:</p>
                <p className="body-medium">{warehouse.contact_phone}</p>
                <p className="body-medium">{warehouse.contact_email}</p>
              </div>
            </div>
          </div>
          {/* TABLET/DESKTOP LIST HEADER */}
          <div className="header">
            <div className="header__box">
              <div className="header__item header__title">
                <span className="header__text">INVENTORY ITEM</span>
                <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
              </div>
              <div className="header__status header__title">
                <span className="header__text">STATUS</span>
                <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
              </div>
              <div className="header__category header__title">
                <span className="header__text">CATEGORY</span>
                <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
              </div>
              <div className="header__quantity header__title">
                <span className="header__text">QUANTITY</span>
                <img
                  className="link__icon"
                  src={sortIcon}
                  alt="sort icon to sort inventory item"
                ></img>
              </div>
            </div>
            <div className="header__actions">
              <span className="header__text">ACTIONS</span>
            </div>
          </div>
          {/* WAREHOUSE INVENTORY LIST */}
          <div className="invetory-list"></div>
          {/* <ul>
            {inventories.map((item) => {
              return (
                <li key={item.id}>
                  <InventoryItem inventories={inventories} />
                </li>
              );
            })}
          </ul> */}
          <InventoryItem/>
        </div>
      </main>
    </>
  );
}

export default WarehouseDetails;
