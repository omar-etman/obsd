//import data

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const addToCart = (item) => {
    return {
      type:ADD_TO_CART,
      item
    }
  }
  
  const removeFromCart = (id) => {
    return {
      type:REMOVE_FROM_CART,
      id
    }
  }

  //function handleAddToCart
  //function handleRemoverFromCart