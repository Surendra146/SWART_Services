import { NavLink } from "react-router-dom";
import "./../styles/home.css";


const Navbar = () => {
  return (
    <header className="header">
        <div className="CPN"> <h1>SWART</h1></div>
     
        <ul className="ul">
          <li><NavLink to="/" className="active">Home</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Services">Services</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
          </ul>
        </header>
  
  );
};

export default Navbar;
