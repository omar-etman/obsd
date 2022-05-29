import { useState } from 'react'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import {useSelector} from 'react-redux'
import './OrderCard.css'
function OrderCard() {
  const [checked, setChecked] = useState([true, false])

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }

  const orders = useSelector((state) => state.app.orders)

  return (
    <div className="orderCard-container">
      <div className="container-timeStamp">timeStamp</div>
      <ul>
        <li>
          <Checkbox />
        </li>
        <li>
          <Checkbox />
        </li>
        <li>
          <Checkbox />
        </li>
        <li>
          <Checkbox />
        </li>
      </ul>
    </div>
  )
}

export default OrderCard
