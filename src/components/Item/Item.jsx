import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <Link to={`/item/${item.id}`} className="item-link">
      <div key={item.id} className="card">
          <img src={item.image} alt={item.name}/>
          <h2>{item.name}</h2>
          <h3>{item.category}</h3>
          <p>${item.price}</p>
      </div>      
    </Link>
    )
 }

export default Item