import React from 'react';
import './CartItemCard.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { connect } from 'react-redux';
import {
  addToCart,
  reduceFromCart,
  removeFromCart,
} from '../../redux/cart/cartActions';

function CartItemCard({ item, addToCart, reduceFromCart, removeFromCart }) {
  const add = (e) => {
    addToCart(item);
  };

  const subtract = (e) => {
    reduceFromCart(item);
  };

  const remove = (e) => {
    removeFromCart(item);
  };
  return (
    <div className="card-container">
      <img src={item?.img} alt="itemImg" className="card-img" />
      <div className="card-info">
        <div className="item-details">
          <h3 className="item-name">{item?.name}</h3>
        </div>
        <div className="card-incrementor">
          <span>QTY: </span>
          <button onClick={subtract} className="incrementor-btn minus">
            -
          </button>
          <p className="incrementor-display">{item?.quantity}</p>
          <button onClick={add} className="incrementor-btn">
            +
          </button>
        </div>
        <span className="item-price">Price: {item?.price}</span>
      </div>
      <span onClick={remove} style={{ marginBottom: '5rem' }}>
        <DeleteForeverIcon />
      </span>
    </div>
  );
}

function mapStateToProps(state) {
  return { cart: state.cartReducer.cartItems };
}

export default connect(mapStateToProps, {
  addToCart,
  reduceFromCart,
  removeFromCart,
})(CartItemCard);
