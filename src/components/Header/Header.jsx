import "./Header.scss";
import logo from "/src/assets/logo/InStock-Logo_1x.png";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
    <header>
      <nav className="nav">
        <div className="nav__logo-container"><Link to='/' className="nav__logo-link" ><img src={logo} alt="websise logo" className="nav__logo" /></Link></div>
        <ul className="nav__list">
          <li className="nav__list-item"><NavLink to ='/' className="nav__list-link">Warehouses</NavLink></li>
          <li className="nav__list-item"><NavLink to ='/inventory' className="nav__list-link">Inventory</NavLink></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;
