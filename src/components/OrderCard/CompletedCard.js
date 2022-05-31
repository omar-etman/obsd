import {Fragment} from 'react'
import './OrderCard.css'
function CompletedCard({ order }) {

  return (
    <Fragment>
      <div className="completedCard-timeStamp">
        <span className="spacer">
          {order?.created_at}
        </span>
      </div>
      <ul className="completedCard-checkList">
        {order?.orderline.map((i) => (
          <li className="orderCard-checkList-row" key={i.id}>
            <span>{i.product.name}</span>
            <span className="spacer">{i.product.price}$</span>
            <span>QTY:{i.quantity}</span>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export default CompletedCard
