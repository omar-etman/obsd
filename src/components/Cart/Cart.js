import React from 'react'
import CartItemCard from '../CartItemCard/CartItemCard'
import { Link } from 'react-router-dom'
import './Cart.css'
function Cart() {

    return (
    <div className='cart-container'>
        {/* cartitems.length === false ? <div className='cart-noItems></div> : */}
        <ul className='cart-list'>
            <li><CartItemCard/></li>
            <li><CartItemCard/></li>
            <li><CartItemCard/></li>
            <li><CartItemCard/></li>
        </ul>
        <p className='cart-subTotal'>subtotal: 'item's price'</p>
        <Link to ='/form'>
            <button className='cart-checkout'>
                CHECKOUT
            </button>
        </Link>
    </div>
  )
}

export default Cart