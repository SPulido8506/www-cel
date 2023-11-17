import React from "react";
import "../styles/Header.css";
const Header = ({ currentForm, onSwitchForm }) => {
  return (
    <nav>
      {/* <img src="./icons/icon_menu.svg" alt="menu" className="menu" /> */}
      <div className="navbar-left">
         
         <ul>       
           <li>
             <a href="/home">Home</a>
           </li>
           <li>
             <a href="/empleados">Empleados</a>
           </li>           
         </ul>
       </div>
      <div className="navbar-right">
        <ul>
          <li>
            <a href="/">Salir</a>
          </li>
          <li className="navbar-email">S&R CONSULTORÏA</li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;






