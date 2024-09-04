import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from "../../context/CartContext/CartProvider"
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {getTotalProducts} = useContext(CartContext);
  return (
    <Link to={"/cart"} className='cart-icon'>
        <img src="../../public/assets/images/ion_cart-outline.png" alt="" />
        {getTotalProducts() === 0 ? null : getTotalProducts}
    </Link>
  )
}

export default CartWidget