import "../ErrorMessage/ErrorMessage.scss"
import errorIcon from "/src/assets/icons/error-24px.svg";


function ErrorMessage() {
    return (
        <div className="inventory-form__error">
            <img src={errorIcon} alt="Error icon" className="inventory-form__error-icon" />
            <span className="inventory-form__error-message">This field is required</span>
        </div>
    )
}

export default ErrorMessage; 