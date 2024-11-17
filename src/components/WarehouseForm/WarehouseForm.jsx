import "./WarehouseForm.scss";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import ErrorMessage from "../ErrorMessage/ErrorMessage";


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

    const [warehouseNameError, setWarehouseNameError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [countryError, setCountryError] = useState(false);
    const [contactNameError, setContactNameError] = useState(false);
    const [contactPositionError, setContactPositionError] = useState(false);
    const [contactPhoneError, setContactPhoneError] = useState(false);
    const [contactEmailError, setContactEmailError] = useState(false);

    //Form Field HandleChange Events

 
    const handleWarehouseChange = (e) => {
        setWarehouseNameInput(e.target.value);
        setWarehouseNameError(false);
      };
    const handleAddressChange = (e) => {
        setAddressInput(e.target.value);
        setAddressError(false);
    };
    const handleCountryChange = (e) => {
        setCountryInput(e.target.value);
        setCountryError(false);
      };
    const handleCityChange = (e) => {
        setCityInput(e.target.value);
        setCityError(false);
    };

    const handleContactNameChange = (e) => {
        setContactNameInput(e.target.value);
        setContactNameError(false);
    };
    const handleContactPositionChange = (e) => {
        setContactPositionInput(e.target.value);
        setContactPositionError(false);
    };

    const handleContactPhoneChange = (e) => {
        setContactPhoneInput(e.target.value);
        setContactPhoneError(false);
    };
    const handleContactEmailChange = (e) => {
        setContactEmailInput(e.target.value);
        setContactEmailError(false);
    };

    //Form Validation

    const validateForm = () => {
        let isValid = true;

        if (!warehouseNameInput.trim()) {
            setWarehouseNameError(true);
            isValid = false;
          }
        
        if (!addressInput.trim()) {
            setAddressError(true);
            isValid = false;
          }

        if (!countryInput.trim()) {
            setCountryError(true);
            isValid = false;
          }

        if (!cityInput.trim()) {
            setCityError(true);
            isValid = false;
          }

        if (!contactNameInput.trim()) {
            setContactNameError(true);
            isValid = false;
            }

        if (!contactPositionInput.trim()) {
            setContactPositionError(true);
            isValid = false;
            }

        if (!contactPhoneInput.trim()) {
            setContactPhoneError(true);
            isValid = false;
            }

        if (!contactEmailInput.trim()) {
            setContactEmailError(true);
            isValid = false;
            }

            return isValid;
        };
    

    const handleSubmit = (e) =>  {
        e.preventDefault();

        if (!validateForm()) return;

        const warehouseData = {
            warehouse_name: warehouseNameInput,
            address: addressInput,
            city: cityInput,
            country: countryInput,
            contact_name: contactNameInput, 
            contact_position: contactPositionInput,
            contact_phone: contactPhoneInput,
            contact_email: contactEmailInput,
        };

        const submitWarehouseForm = async () => {
            try {
                if (id) {
                    const {data} = await axios.put(`${baseUrl}/api/warehouses/${id}`, warehouseData);
                    alert(`Changes made to Warehouse ${warehouseNameInput}!`);
                    navigate('/warehouses');
                } else {
                const {data} = await axios.post(`${baseUrl}/api/warehouses/`, warehouseData);
                alert(`New warehouse ${warehouseNameInput} added!`);
                navigate('/warehouses');
                } 
            } catch (error) {
                console.error("Error submitting warehouse:", error);
                }
            };

            submitWarehouseForm();
        };
    



    // Cancel Button Function:

    const handleCancel = () => {
        navigate(`/warehouses/${id}`);
    };

    return (
    <form onSubmit={handleSubmit}>

        <div className="form-container">
            <div className="form__field">
            <h2 className="subheader">Warehouse Details</h2>

            <fieldset className="form__field">
            <label className="form__label" htmlFor="warehouse_name">
                Warehouse Name
            </label>
            <input
                className={`form__input ${warehouseNameError ? "error" : ""}`}
                type="text"
                id="warehouse_name"
                name="warehouse_name"
                onChange={handleWarehouseChange}
                value={warehouseNameInput}
                placeholder="Warehouse Name"
            />
            {warehouseNameError && <ErrorMessage/>}
            </fieldset>
            <fieldset className="form__field">
            <label className="form__label" htmlFor="address">
                Street Address
            </label>
            <input
                className={`form__input ${addressError ? "error" : ""}`}
                type="text"
                id="address"
                name="address"
                onChange={handleAddressChange}
                value={addressInput}
                placeholder="Address"

            />
            {addressError && <ErrorMessage />}

            </fieldset>
            <fieldset className="form__field">
            <label className="form__label" htmlFor="city">
                City
            </label>
            <input
                className={`form__input ${cityError ? "error" : ""}`}
                type="text"
                id="city"
                name="city"
                onChange={handleCityChange}
                value={cityInput}
                placeholder="City"

            />
            {cityError && <ErrorMessage />}
            </fieldset>           
             <fieldset className="form__field">
            <label className="form__label" htmlFor="country">
                Country
            </label>
            <input
                className={`form__input ${countryError ? "error" : ""}`}
                type="text"
                id="country"
                name="country"
                onChange={handleCountryChange}
                value={countryInput}
                placeholder="Country"

            />
             {countryError && <ErrorMessage />}
            </fieldset>
            </div>

            <div className="divider"></div>
       
       <div className="form__field">
       <h2 className="subheader">Contact Details</h2>
            <fieldset className="form__field">
            <label className="form__label" htmlFor="contact_name">
                Contact Name
            </label>
            <input
                className={`form__input ${contactNameError ? "error" : ""}`}
                type="text"
                id="contact_name"
                name="contact_name"
                onChange={handleContactNameChange}
                value={contactNameInput}
                placeholder="Contact Name"

            />
            {contactNameError && <ErrorMessage />}
            </fieldset>           
            <fieldset className="form__field">
            <label className="form__label" htmlFor="contact_position">
                Position
            </label>
            <input
                className={`form__input ${contactPositionError ? "error" : ""}`}
                type="text"
                id="contact_position"
                name="contact_position"
                onChange={handleContactPositionChange}
                value={contactPositionInput}
                placeholder="Contact Position"

            />
            {contactPositionError && <ErrorMessage />}
            </fieldset>           
            <fieldset className="form__field">
            <label className="form__label" htmlFor="contact_phone">
                Phone Number
            </label>
            <input
                className={`form__input ${contactPhoneError ? "error" : ""}`}
                type="text"
                id="contact_phone"
                name="contact_phone"
                onChange={handleContactPhoneChange}
                value={contactPhoneInput}
                placeholder="Contact Phone"

            />
            {contactPhoneError && <ErrorMessage/>}
            </fieldset>           
            <fieldset className="form__field">
            <label className="form__label" htmlFor="contact_email">
                Email
            </label>
            <input
                className={`form__input ${contactEmailError ? "error" : ""}`}
                type="text"
                id="contact_email"
                name="contact_email"
                onChange={handleContactEmailChange}
                value={contactEmailInput}
                placeholder="Contact Email"

            />
            {contactEmailError && <ErrorMessage/>}
            </fieldset>
             </div>
        </div>

        <div className="submit-container">
            <button className="button button-secondary" onClick={handleCancel} >Cancel</button>
            <button type="submit" className="button button-primary">{action === "edit" ? "Save" : "+ Add Warehouse"}</button>
        </div>
    </form>
    );
  }
  
  export default WarehouseForm;