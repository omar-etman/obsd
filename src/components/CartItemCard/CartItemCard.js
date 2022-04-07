import React from 'react'
import './CartItemCard.css'
import itemImg from '../../assets/—Pngtree—seafood pizza with cheese_4942142.png'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function CartItemCard() {

  
const add = (e) => {
    //add amount --> edit within the mapped array
}

const subtract = (e) => {
    //subtract amount --> edit within the mapped array
}

const remove = (e) => {
    //pops item out of the cart array
}
  return (
    <div className='card-container'>
      <img src={itemImg} alt='itemImg' className='card-img'/>
      <div className='card-info'>
        <div className='item-details'>
            <h3 className='item-name'>item's name</h3>
        </div>
        <div className='card-incrementor'>
            <span>QTY: </span>
            <button onClick={subtract} className='incrementor-btn minus'>-</button>
            <p className='incrementor-display'>#</p>
            <button onClick={add} className='incrementor-btn'>+</button>
        </div>
        <span className='item-price'>Price: item's price</span>
      </div>
      <span onClick={remove} style={{marginBottom: "5rem"}}><DeleteForeverIcon/></span>
    </div>
  )
}

export default CartItemCard