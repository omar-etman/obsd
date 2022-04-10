export const addOrder = (order) =>{
    return{
        type:"ADD_ORDER",
        payLoad:order,
    }
}

export const toggleOrder = (order) =>{
    return{
        type:"TOGGLE_ORDER",
        payLoad:order,
    }
}

export const cancelOrder = (order) =>{
    return{
        type:"CANCEL_ORDER",
        payLoad:order,
    }
}


