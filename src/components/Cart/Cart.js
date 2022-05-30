import React from 'react'
import CartItemCard from '../CartItemCard/CartItemCard'
import { Link } from 'react-router-dom'
import './Cart.css'
import { useSelector } from 'react-redux'

function Cart({ toggleDropDown3 }) {
  const cart = useSelector((state) => state.app.cart)

  const subTotal = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity
  }, 0)

  return (
    <div className="cart-container">
      <ul className="cart-list">
        {cart.map((el) => {
          return (
            <li key={el.id}>
              <CartItemCard item={el} />
            </li>
          )
        })}
      </ul>
      <p className="cart-subTotal">{`Subtotal = ${subTotal} LE`}</p>
      <Link to="/form">
        <button className="cart-checkout" onClick={toggleDropDown3}>
          CHECKOUT
        </button>
      </Link>
    </div>
  )
}

export default Cart
