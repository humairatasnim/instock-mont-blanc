import "./WarehouseForm.scss";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

function WarehouseForm( {action, warehouses} ) {
    const [ warehouse, setWarehouse] = useState([])
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (warehouses.length > 0) {
            const foundWarehouse = warehouses.find((wh) => wh.id == id);
            if (foundWarehouse) {
                setWarehouse(foundWarehouse);
                setWarehouseNameInput(foundWarehouse.warehouse_name);
                setAddressInput(foundWarehouse.address);
                setCityInput(foundWarehouse.city);
                setCountryInput(foundWarehouse.country);
                setContactNameInput(foundWarehouse.contact_name);
                setContactPositionInput(foundWarehouse.contact_position);
                setContactPhoneInput(foundWarehouse.contact_phone);
                setContactEmailInput(foundWarehouse.contact_email);
             }
        }
    }, []);

    console.log(warehouse)
    // if (!warehouse) {
    //     return <>Loading...</>; 
    // }

    const { warehouse_name, address, city, country, contact_email, contact_name, contact_phone, contact_position } = warehouse;

    //Form Field UseStates

    const [warehouseNameInput, setWarehouseNameInput] = useState("");
    const [addressInput, setAddressInput] = useState("");
    const [countryInput, setCountryInput] = useState("");
    const [cityInput, setCityInput] = useState("");
    const [contactNameInput, setContactNameInput] = useState("");
    const [contactPositionInput, setContactPositionInput] = useState("");
    const [contactPhoneInput, setContactPhoneInput] = useState("");
    const [contactEmailInput, setContactEmailInput] = useState("");

    console.log(warehouse_name)
    console.log(warehouseNameInput)
    
    //Form Field HandleChange Events

 
    const handleWarehouseChange = (e) => {
        setWarehouseNameInput(e.target.value);
      };
    const handleAddressChange = (e) => {
        setAddressInput(e.target.value);
    };
    const handleCountryChange = (e) => {
        setCountryInput(e.target.value);
      };
    const handleCityChange = (e) => {
        setCityInput(e.target.value);
    };
    const handleContactNameChange = (e) => {
        setContactNameInput(e.target.value);
    };
    const handleContactPositionChange = (e) => {
        setContactPositionInput(e.target.value);
    };
    const handleContactPhoneChange = (e) => {
        setContactPhoneInput(e.target.value);
    };
    const handleContactEmailChange = (e) => {
        setContactEmailInput(e.target.value);
    };

    //Form Validation

    const isFormValid = () => {
        if (!warehouseNameInput || !addressInput || !countryInput || !cityInput || !contactNameInput || !contactPositionInput || !contactPhoneInput || !contactEmailInput) {
            return false;
        }
        return true;
    };

    // Save Button Function:

    const handleSubmit = (e) =>  {
        e.preventDefault();
        if (!isFormValid()) {
            alert("Please ensure all fields are filled out");
        return;
        }

        const editWarehouse = async () => {
            try {
                const {data} = await axios.put(`${baseUrl}/api/warehouses/${id}`, 
                    {warehouse_name: warehouseNameInput,
                        address: addressInput,
                        city: cityInput,
                        country: countryInput,
                        contact_name: contactNameInput, 
                        contact_position: contactPositionInput,
                        contact_phone: contactPhoneInput,
                        contact_email: contactEmailInput,
                    });
                alert(`Changes made to Warehouse ${warehouseNameInput}`);
                navigate(`/warehouses/${id}`);
                console.log(data); 
            } catch (error) {
                console.error("Error posting to API", error);
                }
            };
            editWarehouse();
    }

    // Cancel Button Function:

    const handleCancel = () => {
        navigate(`/warehouses/${id}`);
    };

    return (
    <section>

        <div className="formcontainer">
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
                onChange={handleWarehouseChange}
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
                onChange={handleAddressChange}
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
                onChange={handleCityChange}
                value={cityInput}
            />
            <label className="form__label" htmlFor="country">
                Country
            </label>
            <input
                className="form__input"
                type="text"
                id="country"
                name="country"
                onChange={handleCountryChange}
                value={countryInput}
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
                onChange={handleContactNameChange}
                value={contactNameInput}
            />
            <label className="form__label" htmlFor="contact_position">
                Position
            </label>
            <input
                className="form__input"
                type="text"
                id="contact_position"
                name="contact_position"
                onChange={handleContactPositionChange}
                value={contactPositionInput}
            />
            <label className="form__label" htmlFor="contact_phone">
                Phone Number
            </label>
            <input
                className="form__input"
                type="text"
                id="contact_phone"
                name="contact_phone"
                onChange={handleContactPhoneChange}
                value={contactPhoneInput}
            />
            <label className="form__label" htmlFor="contact_email">
                Email
            </label>
            <input
                className="form__input"
                type="text"
                id="contact_email"
                name="contact_email"
                onChange={handleContactEmailChange}
                value={contactEmailInput}
            />
            </fieldset>
        </div>

        <div className="submit-container">
            <button className="button button-secondary" onClick={handleCancel} >Cancel</button>
            <button type="submit" onClick={handleSubmit} className="button button-primary">{action}</button>
        </div>
    </section>
    );
  }
  
  export default WarehouseForm;