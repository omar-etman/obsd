const INITIAL_STATE = { orderLine: [] };

export default function ordersReducer(state=INITIAL_STATE, action) {
    switch (action.type){
        case 'ADD_ORDER':
            return state.concat([action.payLoad])
        default:
            return state;

    }
}

