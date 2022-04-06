import React from 'react'
import itemImg from '../../assets/—Pngtree—seafood pizza with cheese_4942142.png'
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
        <img src={itemImg} alt='itemImg' className='card-img'/>
        <div className='card-info'>
            <div className='item-details'>
                <h3 className='item-name'>item's name</h3>
                <p className='item-ingredients'>item's ingredients, item's ingredients, item's ingredients</p>
                <span className='item-price'>Price: item's price</span>
            </div>
            <div className='card-incrementor'>
                <button onClick={add} className='incrementor-btn'>+</button>
                <p className='incrementor-display'>#</p>
                <button onClick={subtract} className='incrementor-btn'>-</button>
            </div>
        </div> 
    </div>
  )
}

export default ItemCard