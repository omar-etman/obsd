import React from 'react'
import ItemCard from '../ItemCard/ItemCard'
import './Cart.css'
function Cart() {

    return (
    <div className='cart-container'>
        {/* cartitems.length === false ? <div className='cart-noItems></div> : */}
        <ul className='cart-list'>
            <li>map</li>
            <li>map</li>
            <li>map</li>
            <li>map</li>
        </ul>
        <p>subtotal: 'item's price'</p>
        <button className='cart-checkout'>
            CHECKOUT
        </button>
    </div>
  )
}

export default Cart