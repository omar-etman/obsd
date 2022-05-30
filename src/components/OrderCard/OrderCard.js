import { useState, Fragment } from 'react'
import Checkbox from '@mui/material/Checkbox'
import {useSelector} from 'react-redux'
import './OrderCard.css'
function OrderCard({orders}) {
  const [checked, setChecked] = useState([true, false])

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <Fragment>
      <div className="container-timeStamp">{orders.created_at}</div>
      <ul>
        {
            orders.orderline.map((i) => (
                <li>
                    <Checkbox/>
                    <span>{i.product.name}</span>
                    <span>{i.product.price}</span>
                    <span>{i.quantity}</span>   
                </li>
            ))
        }
      </ul>
    </Fragment>
  )
}

export default OrderCard
