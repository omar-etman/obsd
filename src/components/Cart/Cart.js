import React from 'react';
import CartItemCard from '../CartItemCard/CartItemCard';
import { Link } from 'react-router-dom';
import './Cart.css';
import { connect } from 'react-redux';
function Cart({ cart }) {
  console.log(cart);
  return (
    <div className="cart-container">
      <ul className="cart-list">
        {cart.map((el) => {
          return (
            <li>
              <CartItemCard item={el} />
            </li>
          );
        })}
      </ul>
      <p className="cart-subTotal">subtotal: 'item's price'</p>
      <Link to="/form">
        <button className="cart-checkout">CHECKOUT</button>
      </Link>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return { cart: state.cartReducer.cartItems };
}

export default connect(mapStateToProps)(Cart);
