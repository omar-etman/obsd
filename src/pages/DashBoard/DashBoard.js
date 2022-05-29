import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getOrders, getCompletedOrders, updateOrderStatus } from '../../API'
import './DashBoard.css'
function DashBoard({ order }) {
  const orders = useSelector((state) => state.app.orders)

  const [pendingView, setPendingView] = useState(false)
  const [completedView, setCompletedView] = useState(false)
  const pendingViewToggler = (e) => {
    setCompletedView(false)
    setPendingView(true)
  }
  const completedViewToggler = (e) => {
    setCompletedView(true)
    setPendingView(false)
  }

  const setOrdersData = () => {}

  return (
    <div className="dashBoard-container">
      <aside>
        <h1>Dashboard</h1>
        <ul className="dashBoard-nav">
          <li onClick={(e) => pendingViewToggler(e)} className="nav-item">
            Pending <span>{orders.length}</span>
          </li>
          <li onClick={(e) => completedViewToggler(e)} className="nav-item">
            Completed
          </li>
        </ul>
      </aside>
      <main>
        {pendingView === true ? (
          <div className="dashBoard-pending-container">
            <ul className="pending-list">
              <li>pending</li>
            </ul>
          </div>
        ) : null}
        {completedView === true ? (
          <div className="dashBoard-completed-container">completed</div>
        ) : null}
      </main>
    </div>
  )
}

export default DashBoard
