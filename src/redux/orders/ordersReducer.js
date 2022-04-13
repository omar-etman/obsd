const INITAL_STATE = { cartItems: [] };

export default function ordersReducer(state=INITAL_STATE, action) {
    switch (action.type){
        case 'ADD_ORDER':
            return [
                ...state,
                action.payLoad,
            ]
        default:
            return state;

    }
}

