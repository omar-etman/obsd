import React from 'react';
import CartItemCard from '../CartItemCard/CartItemCard';
import '../Cart/Cart.css';
import { connect } from 'react-redux';
function CheckOutList({ cart }) {

  const subTotal = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity
  },0)

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
      <p className="cart-subTotal">{`Subtotal = ${subTotal} LE`}</p>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return { cart: state.cartReducer.cartItems };
}

export default connect(mapStateToProps)(CheckOutList);