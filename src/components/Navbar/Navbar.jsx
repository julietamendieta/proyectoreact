import "./Navbar.css"
import "../CartWidget/CartWidget"
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div>
            <h1 className="nav-logo">Mundo <br/> literario</h1>
        </div>
        <div>
            <ul className="nav-list">
                <li><a href="">Fantasía</a></li>
                <li><a href="">Romance</a></li>
                <li><a href="">Thriller/Misterio</a></li>
                <li><a href="">Ficción literaria</a></li>
                <li><a href="">No Ficción</a></li>
            </ul>
        </div>
        <CartWidget/>
    </nav>
  )
}

export default Navbar