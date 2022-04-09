//import data

export const CHECK_OUT = 'CHECK_OUT'
export const CANCEL = 'CANCEL'

const checkOut = (items) => {
    return {
      type: CHECK_OUT,
      items
    }
  }
  
  const cancel = (items) => {
    return {
      type: CANCEL,
      items
    }
  }

