//import dummy data

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

const increment = (id) => {
    return {
      type:INCREMENT,
      id
    }
  }
  
  const decrement = (id) => {
    return {
      type:DECREMENT,
      id
    }
  }