import React, { useContext } from 'react'
import CartDetail from '../CartDetail/CartDetail';
import { CartContext } from '../../context/CartContext/CartProvider';

const Cart = () => {
    const {cart} = useContext(CartContext);
  return (
    <div>
        {cart.length === 0 ? (<h2 style={{color: "rgb(97, 128, 196)", textAlign: "center"}}>No hay productos en el carrito</h2>) : 
        <>(<CartDetail cart={cart} />)</>}
    </div>
  );
};

export default Cart