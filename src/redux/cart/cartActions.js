export const addToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    payLoad: item,
  };
};

export const removeFromCart = (item) => {
  return {
    type: 'REMOVE_FROM_CART',
    payLoad: item,
  };
};

export const reduceFromCart = (item) => {
  return {
    type: 'REDUCE_FROM_CART',
    payLoad: item,
  };
};
