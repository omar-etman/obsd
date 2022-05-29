import React from 'react';
import './CartItemCard.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
  addToCart,
  reduceFromCart,
  removeFromCart,
} from '../../redux/reducers/app';
import {useDispatch} from 'react-redux'

function CartItemCard ({item}) {

  const dispatch = useDispatch()
  const add = (e) => {
    dispatch(addToCart(item));
  };

  const subtract = (e) => {
    console.log(item)
    dispatch(reduceFromCart(item));
  };

  const remove = (e) => {
    dispatch(removeFromCart(item));
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

export default CartItemCard;
