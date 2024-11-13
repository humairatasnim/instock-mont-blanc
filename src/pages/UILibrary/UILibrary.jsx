import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import "./UILibrary.scss";

function UILibrary() {
  return (
    <div className="container">
      <h1 className="page-header">InStock Base Components</h1>

      <section className="section">
        <h2 className="subheader">Buttons</h2>
        <button className="button button-primary">+ Add Item</button>
        <button className="button button-secondary">Cancel</button>
        <button className="button button-delete">Delete</button>
      </section>

      <section className="section">
        <h2 className="subheader">Links</h2>
        <a href="" className="link">
          <span className="link__text">Manhattan</span>
          <img src={chevronIcon} alt="BrainFlix logo" className="link__icon" />
        </a>
      </section>

      <section className="section">
        <h2 className="subheader">Forms: Text input</h2>
        <fieldset className="form__field">
          <label className="form__label" htmlFor="name">
            Item Name
          </label>
          <input
            className="form__input"
            type="text"
            id="name"
            name="name"
            placeholder="Please enter item name"
          />
        </fieldset>
      </section>

      <section className="section">
        <h2 className="subheader">Forms: Textarea</h2>
        <fieldset className="form__field">
          <label className="form__label" htmlFor="description">
            Description
          </label>
          <textarea
            className="form__textarea"
            id="description"
            name="description"
            placeholder="Please enter a brief item description..."
          ></textarea>
        </fieldset>
      </section>

      <section className="section">
        <h2 className="subheader">Forms: Radio buttons</h2>
        <fieldset className="form__field">
          <label className="form__label">Status</label>
          <div className="form__radio-group">
            <div className="form__radio-item">
              <input
                className="form__radio-input"
                type="radio"
                id="in-stock"
                name="group1"
              />
              <label className="form__radio-label" htmlFor="in-stock">
                In stock
              </label>
            </div>
            <div className="form__radio-item">
              <input
                className="form__radio-input"
                type="radio"
                id="out-of-stock"
                name="group1"
              />
              <label className="form__radio-label" htmlFor="out-of-stock">
                Out of stock
              </label>
            </div>
          </div>
        </fieldset>
      </section>

      <section className="section">
        <h2 className="subheader">Tags</h2>
        <div className="tag in-stock">In stock</div>
        <div className="tag out-of-stock">Out of stock</div>
      </section>
    </div>
  );
}

export default UILibrary;
