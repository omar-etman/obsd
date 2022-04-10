import { addItem, reduceItem } from './cart.utils';
const INITAL_STATE = { cartItems: [] };

export default function cartReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payLoad),
      };
    case 'REDUCE_FROM_CART':
      return {
        ...state,
        cartItems: reduceItem(state.cartItems, action.payLoad),
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item.id !== action.payLoad.id;
        }),
      };

    default:
      return state;
  }
}
