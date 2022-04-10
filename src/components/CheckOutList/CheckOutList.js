import React from 'react';
import CartItemCard from '../CartItemCard/CartItemCard';
import '../Cart/Cart.css';
import { connect } from 'react-redux';
function CheckOutList({ cart }) {
  console.log(cart);
  return (
    <div className="cart-container">
      <ul className="cart-list">
        {cart.map((el) => {
          return (
            <li>
              <CartItemCard key={el.id} item={el} />
            </li>
          );
        })}
      </ul>
      <p className="cart-subTotal">subtotal: 'item's price'</p>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return { cart: state.cartReducer.cartItems };
}

export default connect(mapStateToProps)(CheckOutList);