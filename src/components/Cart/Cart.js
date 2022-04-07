import React from 'react'
import ItemCard from '../ItemCard/ItemCard'
import './Cart.css'
function Cart() {

    return (
    <div className='cart-container'>
        {/* cartitems.length === false ? <div className='cart-noItems></div> : */}
        <ul className='cart-list'>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
            <li><ItemCard/></li>
        </ul>
        <p className='cart-subTotal'>subtotal: 'item's price'</p>
        <button className='cart-checkout'>
            CHECKOUT
        </button>
    </div>
  )
}

export default Cart