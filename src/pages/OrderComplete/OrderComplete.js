import React from 'react'
import orderComplete from '../../assets/circle-checkmark-512.webp'
import {useNavigate} from "react-router-dom"
import './OrderComplete.css'

function OrderComplete() {
    const navigate = useNavigate()
    const back = () => {
        navigate("/")
    }
  return (
    <main className='orderComplete-container'>
        <img src={orderComplete} alt={`Order Complete`} className='orderComplete-image'/>
        
        <h1 className='orderComplete-header'>Your Order is on its way</h1>
        <button className='orderComplete-back-button'onClick={(e) => back(e)}>back to menu</button>
    </main>
  )
}

export default OrderComplete