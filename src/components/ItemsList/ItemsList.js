import React from 'react'
import ItemCard from '../ItemCard/ItemCard'
import './ItemsList.css'

function ItemsList() {
  return (
    <div className='itemsList-container'>
        <ul className='itemsList-topBtns'>
            <button className='topBtns-btn'>POPULAR</button>
            <button className='topBtns-btn'>PIZZA</button>
            <button className='topBtns-btn'>BURGER</button>
            <button className='topBtns-btn'>CREPE</button>
            <button className='topBtns-btn'>DRINKS</button>
        </ul>
        <ul className='itemsList-display'>
            <li><ItemCard/></li>
        </ul>
    </div>
  )
}

export default ItemsList