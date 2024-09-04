import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';
import './CartDetail.css'


const CartDetail = ({cart}) => {
    const {getTotal, getTotalProducts, removeItem, clearCart, buy} = useContext(CartContext);
  return(
    <div className='cartDetail'>
        <h2>Carrito de compras</h2>
        {cart?.map((item) => (
            <div key={item.product.id} className='productInCart'>
                <img src={item.product.image} alt="" />
                <div className='productInfo'>
                    <h4>{item.product.name}</h4>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.product.price}</p>
                </div>

                <button onClick={() => removeItem(item.product.id)}>Eliminar</button>
            </div>
        ))}
        <div className='totalCart'>
            <h3>Cantidad de productos: {getTotalProducts()}</h3>
            <h3>Total a pagar: $ {getTotal()}</h3>
            <button onClick={clearCart}>Vaciar carrito</button>
            <button onClick={buy}>Comprar</button>
        </div>
    </div>
  )
}

export default CartDetail;