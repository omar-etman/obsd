import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'

//store --> globalized state
// let store = createStore(quantity);

//action --> increment
//quantity actions

//cart actions

//checkOut actions

//items actions


//dashboard actions




//reducer --> describes how action alters state
// const quantityReducer = (state = 0, action){
//   switch(action.type){
//     case 'INCREMENT':
//       return {
//         ...state[item.quantity] + 1
//       }
//     case 'DECREMENT':
//       return {
//         ...state[item.quantity] + 1
//       }
//   }
// }

// const listReducer = (state={}, action){
//   switch(action.type){
//     case 'RECIEVE_POPULAR':
//       return{
//         ...state,
//         ...action.popular
//       }
//     case 'RECIEVE_PIZZA':
//       return{
//         ...state,
//         ...action.pizza
//       }
//       case 'RECIEVE_BURGER':
//         return{
//           ...state,
//           ...action.burger
//         }
//       case 'RECIEVE_CREPE':
//         return{
//           ...state,
//           ...action.crepe
//         }
//       case 'RECIEVE_PIZZA':
//         return{
//           ...state,
//           ...action.pizza
//         }
//       default:
//         return state
//   }

// }

// const cartReducer = (state = [], action) => {
//   switch(action.type){
//     case 'ADD_TO_CART':
//       return state.concat([action.item])
//     case 'REMOVE_FROM_CART':
//       return state.filter((item) => item.id !== action.id) 
//   }
// }

// const checkOutReducer = (state ={}, action) => {
//   switch(action.type){
//     case 'CHECK_OUT':
//       return {
//         //map cart 
//       }
//     case 'CANCEL':
//       return {
//         //empty cart
//       }
//     default :
//       return state
//   }
// }

//dashBoard reduce
//dispatch --> executes reducer based action







ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
