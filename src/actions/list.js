export const RECIEVE_POPULAR = "RECIEVE_POPULAR"
export const RECIEVE_PIZZA = "RECIEVE_PIZZA"
export const RECIEVE_BURGER = "RECIEVE_BURGER"
export const RECIEVE_CREPE = "RECIEVE_CREPE"
export const RECIEVE_DRINKS = "RECIEVE_DRINKS"

const recievePopular = (popular) => {
    return {
      type: RECIEVE_POPULAR,
      popular,
    }
  }
  
  const recievePizza = (pizza) => {
    return {
      type: RECIEVE_PIZZA,
      pizza,
    }
  }
  
  const recieveBurger = (burger) => {
    return {
      type: RECIEVE_BURGER,
      burger,
    }
  }
  
  const recieveCrepe = (crepe) => {
    return {
      type: RECIEVE_CREPE,
      crepe,
    }
  }
  
  const recieveDrinks = (drinks) => {
    return {
      type: RECIEVE_DRINKS,
      drinks,
    }
  }

  //export handleRecieve switch case code