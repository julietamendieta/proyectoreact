import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext/CartProvider'
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {
  const {addItems} = useContext(CartContext);
  const [showItemCount, setShowItemCount] = useState(true)
  const onAdd = (quantity) => {
    addItems(product, quantity);
    setShowItemCount(false);
  };


  return (
    <div className='productDetail'>
      <div className='productName'>
        <h1>{product.name}</h1>
        <h3>{product.category}</h3>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='productDesc'>
        <h2>Autor/a: {product.author}</h2>
        <p className='prod-desc'>Descripción: <br /><br />{product.description}</p>
        <h3>Stock: {product.stock}</h3>
        <h2>${product.price}</h2>
        
        {showItemCount && product.stock !== 0 ? (<ItemCount initial={1} stock={product.stock} onAdd={onAdd} />) : 
        (<div>
          {product.stock === 0 ? (<div><p>Producto agotado.</p><Link to={"/"}>Volver al inicio.</Link></div>) : ("")}
          <Link to={"/cart"}>Ir al carrito</Link>
        </div>)}
      </div>
    </div>
  )
}

export default ItemDetail