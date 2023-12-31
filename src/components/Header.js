import React from "react";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";
const Header = ({ currentForm, onSwitchForm }) => {
  return (
    <nav>
      <div className="navbar-left">
         <ul>
           <li>
             <a href="/empleados"><span>Empleados</span></a>
           </li>
           <li>
             <a href="/usuarios">Usuarios</a>
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






