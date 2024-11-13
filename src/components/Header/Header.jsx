import "./Header.scss";
import logo from "/src/assets/logo/InStock-Logo_1x.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
    <header>
      <nav className="nav">
        <div className="nav__logo-container"><NavLink to='/'><img src={logo} alt="websise logo" className="nav__logo" /></NavLink></div>
        <ul className="nav__list">
        <li className="nav__links-item"><NavLink to ='/inventory'>Inventory</NavLink></li>
        <li className="nav__links-item"><NavLink to ='/'>Warehouses</NavLink></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;
