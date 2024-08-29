import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
    <nav>
        <ul>
           <li>
            <Link  to='/'>Home</Link>
        </li>
        <li>
          <Link  to="/Products">Productos </Link>
        </li>
        <li>
          <Link  to="/About"> About</Link>
        </li>
        <li >
          <Link  to="/Revisar"> Revisar</Link>
        </li>  
      <li >
          <Link  to="/Servicios"> Servicios</Link>
        </li>
    </ul>
   </nav>
    </div>
  );
};
export default Navbar;