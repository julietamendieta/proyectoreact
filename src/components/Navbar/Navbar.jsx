import "./Navbar.css"
import "../CartWidget/CartWidget"
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div>
            <Link to="/" className="nav-logo"><img src="/assets/images/logo.png" alt="" />Mundo <br/> literario</Link>
        </div>
        <div>
            <ul className="nav-list">
                <li><NavLink to="/category/Fantasia" className={({isActive}) => (isActive ? "active" : "linkto")}>Fantasía</NavLink></li>
                <li><NavLink to="/category/Romance" className={({isActive}) => (isActive ? "active" : "linkto")}>Romance</NavLink></li>
                <li><NavLink to="/category/ThrillerMisterio" className={({isActive}) => (isActive ? "active" : "linkto")}>Thriller/Misterio</NavLink></li>
                <li><NavLink to="/category/FiccionLiteraria" className={({isActive}) => (isActive ? "active" : "linkto")}>Ficción literaria</NavLink></li>
            </ul>
        </div>
        <CartWidget/>
    </nav>
  )
}

export default Navbar