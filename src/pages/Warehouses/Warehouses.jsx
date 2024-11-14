import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import sortIcon from "../../assets/icons/sort-24px.svg";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import "./Warehouses.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function Warehouses({ warehouses }) {

  return (
    <main className="container">
      <section className="warehouses">
        <div className="warehouses__header">
          <h1 className="warehouses__title">Warehouses</h1>
          <input
            className="warehouses__search"
            type="text"
            id="name"
            name="name"
            placeholder="Search..."
          />
          <Link to="warehouses/add" className="button button-primary">
            + Add New Warehouse
          </Link>
        </div>

        <div className="warehouses__body">
          <div className="table__header">
            <div className="table__column table__column--warehouse">
              <div className="table__header-cell table__cell--name">
                <h2 className="table__header-text">Warehouse</h2>
                <button className="table__sort-btn">
                  <img
                    src={sortIcon}
                    alt="Sort icon"
                    className="table__sort-icon"
                  />
                </button>
              </div>

              <div className="table__header-cell table__cell--address">
                <h2 className="table__header-text">Address</h2>
                <button className="table__sort-btn">
                  <img
                    src={sortIcon}
                    alt="Sort icon"
                    className="table__sort-icon"
                  />
                </button>
              </div>
            </div>

            <div className="table__column table__column--contact">
              <div className="table__header-cell table__cell--contact">
                <h2 className="table__header-text">Contact Name</h2>
                <button className="table__sort-btn">
                  <img
                    src={sortIcon}
                    alt="Sort icon"
                    className="table__sort-icon"
                  />
                </button>
              </div>

              <div className="table__header-cell table__cell--contact-info">
                <h2 className="table__header-text">Contact Information</h2>
                <button className="table__sort-btn">
                  <img
                    src={sortIcon}
                    alt="Sort icon"
                    className="table__sort-icon"
                  />
                </button>
              </div>
            </div>

            <div className="table__actions">
              <h2 className="table__header-text">Actions</h2>
            </div>
          </div>

          <ul className="table__body">
            {warehouses.map((warehouse) => (
              <WarehouseList key={warehouse.id} warehouse={warehouse} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Warehouses;
