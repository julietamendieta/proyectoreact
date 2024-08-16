import "./Navbar.css"
import "../CartWidget/CartWidget"
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div>
            <Link to="/" className="nav-logo">Mundo <br/> literario</Link>
        </div>
        <div>
            <ul className="nav-list">
                <li><NavLink to="/category/Fantasia" className="linkto" activeClassName= "active">Fantasía</NavLink></li>
                <li><NavLink to="/category/Romance" className="linkto" activeClassName= "active">Romance</NavLink></li>
                <li><NavLink to="/category/ThrillerMisterio" className="linkto" activeClassName= "active">Thriller/Misterio</NavLink></li>
                <li><NavLink to="/category/FiccionLiteraria" className="linkto" activeClassName= "active">Ficción literaria</NavLink></li>
            </ul>
        </div>
        <CartWidget/>
    </nav>
  )
}

export default Navbar