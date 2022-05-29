import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    orders:[]
}

export const appSlice = createSlice({
    name:'app',
    initialState,
    reducers:{
        addToCart(state, { payload }) {
            const item = state.cart.find((item) => {
                return item.id === payload.id
            })
            console.log({ payload })
        
            if (!item) {
                console.log('pushing', payload)
                state.cart.push({ ...payload, quantity: 1 })
            } else {
                item.quantity += 1
            }
        
            console.log({ item, payload, state })
        },
        reduceFromCart(state,{payload}) {

            // const item = state.cart.find((item) => {
            //     return item.id === payload.id
            // })
                
            // if (payload.quantity === 1) {
            //     state.cart.filter((item) => item.id !== payload.id)
            //     console.log(state.cart)
            // }

            state.cart.filter(item => {return (item.id !== payload.id) || (item.id === payload.id && payload.quantity > 1)})


                .map((item) => {
                
                if(item.id === payload.id && item.quantity > 0){
                    item.quantity --
                }
                return item

            })
            
            
        },
        removeFromCart(state, {payload}) {
            state.cart = state.cart.filter((item) => {
                return item.id !== payload.id
            })
        },
        addOrder(state, {payload}) {
            state.orders.push(payload)
        }

    }
})

export const {addToCart, reduceFromCart, removeFromCart, addOrder} = appSlice.actions

export default appSlice.reducer