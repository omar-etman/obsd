import React from 'react'
import ItemCard from '../ItemCard/ItemCard'
import AccordionList from '../AccordionList/AccordionList'
import './ItemsList.css'

function ItemsList() {
  //function to filter based on category (object for filters as state)
  //for mobile view, a function to assign based on category to the accordions
  return (
    <div className='itemsList-container'>
        <div className='itemsList-accordions'
        >
            <AccordionList/>
        </div>
        <ul className='itemsList-topBtns'>
            <button className='topBtns-btn'>POPULAR</button>
            <button className='topBtns-btn'>PIZZA</button>
            <button className='topBtns-btn'>BURGER</button>
            <button className='topBtns-btn'>CREPE</button>
            <button className='topBtns-btn'>DRINKS</button>
        </ul>
        <ul className='itemsList-display'>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
        </ul>
    </div>
  )
}

export default ItemsList