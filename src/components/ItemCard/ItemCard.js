import React from 'react'
import './ItemCard.css'
function ItemCard() {

  const add = (e) => {
      //add amount --> edit within the mapped array
  }

  const subtract = (e) => {
      //subtract amount --> edit within the mapped array
  }
  return (
    <div className='card-container'>
        <img src='' alt='' className='card-img'/>
        <div className='card-info'>
            <span>item's name</span>
            <p>item's ingredients, item's ingredients, item's ingredients</p>
            <span>Price: item's price</span>
            <ul className='card-incrementor'>
                <button onClick={add} className='incrementor-btn'>+</button>
                <p className='incrementor-display'>#</p>
                <button onClick={subtract} className='incrementor-btn'>-</button>
            </ul>
        </div> 
    </div>
  )
}

export default ItemCard