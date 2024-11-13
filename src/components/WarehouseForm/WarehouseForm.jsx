import "./WarehouseForm.scss";

function WarehouseForm({action}) {
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
                placeholder="insert warehouse details prop"
            />
            <label className="form__label" htmlFor="address">
                Street Address
            </label>
            <input
                className="form__input"
                type="text"
                id="address"
                name="address"
                placeholder="insert warehouse details prop"
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
            <button className="button button-primary">{action}</button>
        </div>

        </section>

  
    );
  }
  
  export default WarehouseForm;