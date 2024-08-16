import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({product}) => {
  return (
    <div className='productDetail'>
      <div className='productName'>
        <h1>{product.name}</h1>
        <h3>{product.category}</h3>
        <img src={product.image} alt={product.name}/>
      </div>
      <div className='productDesc'>
        <p>Descripción: <br />{product.description}</p>
        <h3>Stock: {product.stock}</h3>
        <h2>${product.price}</h2>
        <ItemCount initial={1} stock={product.stock}/>
      </div>
    </div>
  )
}

export default ItemDetail