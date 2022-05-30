import { useState, Fragment } from 'react'
import Checkbox from '@mui/material/Checkbox'
import {useSelector} from 'react-redux'
import './OrderCard.css'
function OrderCard({orders, view, orderComplete}) {

    

  return (
    <Fragment>
      <div className="orderCard-timeStamp"><span className='spacer
      '>{orders.created_at}</span></div>
      <ul className='orderCard-checkList'>
        {
            orders.orderline.map((i) => (
                <li className='orderCard-checkList-row'>
                    {
                        view === "Pending"
                        ?<Checkbox/>
                        :null
                    }
                    <span>{i.product.name}</span>
                    <span className='spacer'>{i.product.price}$</span>
                    <span>QTY:{i.quantity}</span>   
                </li>
            ))
        }
      </ul>
    </Fragment>
  )
}

export default OrderCard
