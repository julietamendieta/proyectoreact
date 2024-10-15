import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

    const decrement = () =>{
        if(count > initial){
            setCount(count - 1);
        }
    }

    const increment = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }

  return (
    <div className='counter'>
        <button onClick={decrement}>-</button>
        <p className='number-count'>{count}</p>
        <button onClick={increment}>+</button>
        <button className='add-button' onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount