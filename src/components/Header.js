import React from "react";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";
const Header = ({location}) => {
  return (
    <nav>
      {/* <img src="./icons/icon_menu.svg" alt="menu" className="menu" /> */}
      <div className="navbar-right">
        {/* <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" /> */}
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/empleados">Empleados</a>
          </li>
          <li>
            <a href="/usuarios">Usuarios</a>
          </li>
          <li>
            <a href="/">Logout</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">msc_spulido@accitesz.com</li>
          {/* <li className="navbar-shopping-cart">
            <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
            <div>2</div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};
export default Header;






