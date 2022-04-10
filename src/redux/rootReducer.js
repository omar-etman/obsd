import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import ordersReducer from './orders/ordersReducer';

export default combineReducers({
  cartReducer: cartReducer,
  ordersReducer: ordersReducer,
});
