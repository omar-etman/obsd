import { Fragment, useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import './OrderCard.css'
import moment from "moment";
function PendingCard({ order, orderComplete }) {

    const [checked, setChecked] = useState(false);

    const  checkOrder= (e) => {
      setChecked(e.target.checked);
      orderComplete(order.id)
    };

  return (
    <Fragment>
      <div className="orderCard-timeStamp">
        <span className="spacer">
          {moment(order.created_at).format("hh: mm: ss")}
        </span>
        <Checkbox checked={checked}
        onChange={checkOrder}/>
      </div>
      <ul className="orderCard-checkList">
        {order.orderline.map((i) => (
          <li className="orderCard-checkList-row" key={i.id}>
            <Checkbox />
            <span>{i.product.name}</span>
            <span className="spacer">{i.product.price}$</span>
            <span>QTY:{i.quantity}</span>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export default PendingCard
