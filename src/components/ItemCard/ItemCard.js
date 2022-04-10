import React, { useState } from 'react';
import { connect } from 'react-redux';
// import itemImg from '../../assets/—Pngtree—seafood pizza with cheese_4942142.png';
import './ItemCard.css';
import { addToCart, reduceFromCart } from '../../redux/cart/cartActions';

function ItemCard({ item, addToCart, reduceFromCart, cart }) {
  // const [quantity, setQuantity] = useState(0);
  console.log(cart);
  const add = () => {
    addToCart(item);
    // setQuantity(quantity + 1);
  };

  const subtract = () => {
    reduceFromCart(item);
    // setQuantity(quantity > 0 ? quantity - 1 : 0);
  };

  const quan = (item) => {
    if (cart.length > 0) {
      console.log(item, cart[0]);
      const x = cart.filter((el) => {
        return el?.name === item?.name;
      });
      if (x.length > 0)
        return cart.filter((el) => el?.name === item?.name)[0]['quantity'];
    }

    return 0;
  };

  return (
    <div className="card-container" style={{ width: '22em', height: '17em' }}>
      <img
        src={item?.img}
        alt="itemImg"
        className="card-img"
        style={{ width: '10em', height: '10em' }}
      />
      <div className="card-info">
        <div className="item-details">
          <h3 className="item-name">{item?.name}</h3>
          <p className="item-ingredients">{item?.description}</p>
          <span className="item-price">Price: {item?.price}</span>
        </div>
        <div className="card-incrementor">
          <button onClick={subtract} className="incrementor-btn minus">
            -
          </button>
          <p className="incrementor-display">{quan(item)}</p>
          <button onClick={add} className="incrementor-btn">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { cart: state.cartReducer.cartItems };
}

export default connect(mapStateToProps, { addToCart, reduceFromCart })(
  ItemCard
);
