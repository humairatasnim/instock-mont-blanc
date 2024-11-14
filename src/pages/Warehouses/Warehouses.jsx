import { useEffect, useState } from "react";
import axios from "axios";
import sortIcon from "../../assets/icons/sort-24px.svg";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import "./Warehouses.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function Warehouses() {
  const [warehouses, setWarehouses] = useState(null);

  const getWarehouses = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/warehouses`);
      setWarehouses(data);
    } catch (error) {
      console.error("Error fetching warehouses:", error);
    }
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  if (!warehouses) return <div>Loading warehouses...</div>

  return (
    <main className="container">
      <section className="panel">
        <div className="panel__header">
          <h1 className="panel__title">Warehouses</h1>
          <input
            className="form__input panel__search"
            type="text"
            id="name"
            name="name"
            placeholder="Search..."
          />
          <button className="button button-primary panel__button">
            + Add New Warehouse
          </button>
        </div>

        <div className="panel__body">
          <div className="table__row table__header-row">
            <div className="table__column">
              <div className="table__content-group table__header-group">
                <h2 className="table__header">Warehouse</h2>
                <button className="table__sort-btn">
                  <img
                    src={sortIcon}
                    alt="Sort icon"
                    className="table__sort-icon"
                  />
                </button>
              </div>
              <div className="table__content-group table__header-group table__address">
                <h2 className="table__header">Address</h2>
                <button className="table__sort-btn">
                  <img
                    src={sortIcon}
                    alt="Sort icon"
                    className="table__sort-icon"
                  />
                </button>
              </div>
            </div>
            <div className="table__column">
              <div className="table__content-group table__header-group">
                <h2 className="table__header">Contact Name</h2>
                <button className="table__sort-btn">
                  <img
                    src={sortIcon}
                    alt="Sort icon"
                    className="table__sort-icon"
                  />
                </button>
              </div>
              <div className="table__content-group table__header-group table__contact-info">
                <h2 className="table__header">Contact Information</h2>
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
              <h2 className="table__header">Actions</h2>
            </div>
          </div>

          {warehouses.map(warehouse => (
            <WarehouseList key={warehouse.id} warehouse={warehouse} />
          ))}

        </div>
      </section>
    </main>
  );
}

export default Warehouses;
