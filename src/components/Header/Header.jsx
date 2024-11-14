import "./Header.scss";
import logo from "/src/assets/logo/InStock-Logo_2x.png";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" className="header__link">
          <img src={logo} alt="InStock logo" className="header__image" />
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/"
              className="nav__link"
              activeclassname="nav__link--active"
            >
              Warehouses
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/inventory"
              className="nav__link"
              activeclassname="nav__link--active"
            >
              Inventory
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
