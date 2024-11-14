import "./WarehouseForm.scss";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

function WarehouseForm( {action} ) {
    const [id, setTestValueOnly] = useState("2")

    const [warehouseNameInput, setWarehouseNameInput] = useState("Washington");
    const [addressInput, setAddressInput] = useState("Canada");

 
    const handleWarehouseInputChange = (e) => {
        setWarehouseNameInput(e.target.value);
      };
    const handleAddressInputChange = (e) => {
        setAddressInput(e.target.value);
    };






    const isFormValid = () => {
        if (!warehouseNameInput || !addressInput) {
            return false;
        }
        return true;
    };

    const handleSubmit = (e) =>  {
        e.preventDefault();
        if (!isFormValid()) {
            alert("Please ensure all fields are filled out");
        return;
        }

    const editWarehouse = async () => {
        try {
            const {data} = await axios.put(`${baseUrl}/warehouses/${id}`, 
                {warehouse_name: warehouseNameInput,
                    address: addressInput
                });
            console.log(data); 
        } catch (error) {
            console.error("Error posting to API", error);
            }
        };

        
        editWarehouse();
}

    return (
      <section className="container">

        <div className="form-container">
            <fieldset className="form__field">
            <h2 className="subheader">Warehouse Details</h2>
            <label className="form__label" htmlFor="warehouse_name">
                Warehouse Name
            </label>
            <input
                className="form__input"
                type="text"
                id="warehouse_name"
                name="warehouse_name"
                onChange={handleWarehouseInputChange}
                value={warehouseNameInput}
            />
            <label className="form__label" htmlFor="address">
                Street Address
            </label>
            <input
                className="form__input"
                type="text"
                id="address"
                name="address"
                onChange={handleAddressInputChange}
                value={addressInput}
            />
            <label className="form__label" htmlFor="city">
                City
            </label>
            <input
                className="form__input"
                type="text"
                id="city"
                name="city"
                placeholder="insert warehouse details prop"
            />
            <label className="form__label" htmlFor="country">
                Country
            </label>
            <input
                className="form__input"
                type="text"
                id="country"
                name="country"
                placeholder="insert warehouse details prop"
            />
            </fieldset>

            <div className="divider"></div>
       
            <fieldset className="form__field">
            <h2 className="subheader">Contact Details</h2>
            <label className="form__label" htmlFor="contact_name">
                Contact Name
            </label>
            <input
                className="form__input"
                type="text"
                id="contact_name"
                name="contact_name"
                placeholder="insert warehouse details prop"
            />
            <label className="form__label" htmlFor="contact_position">
                Position
            </label>
            <input
                className="form__input"
                type="text"
                id="contact_position"
                name="contact_position"
                placeholder="insert warehouse details prop"
            />
            <label className="form__label" htmlFor="contact_phone">
                Phone Number
            </label>
            <input
                className="form__input"
                type="text"
                id="contact_phone"
                name="contact_phone"
                placeholder="insert warehouse details prop"
            />
            <label className="form__label" htmlFor="contact_email">
                Email
            </label>
            <input
                className="form__input"
                type="text"
                id="contact_email"
                name="contact_email"
                placeholder="insert warehouse details prop"
            />
            </fieldset>
        </div>

        <div className="submit-container">
            <button className="button button-secondary">Cancel</button>
            <button type="submit" onClick={handleSubmit} className="button button-primary">{action}</button>
        </div>

        </section>

  
    );
  }
  
  export default WarehouseForm;