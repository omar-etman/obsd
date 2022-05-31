import { useState, useEffect } from 'react'
import { getOrders, updateOrderStatus } from '../../API'
import PendingCard from '../../components/OrderCard/PendingCard'
import CompletedCard from '../../components/OrderCard/CompletedCard'
import './DashBoard.css'
function DashBoard({ order }) {
  const [pendingOrders, setPendingOrders] = useState([])
  const [completedOrders, setCompletedOrders] = useState([])
  const [view, setView] = useState('')
  const setOrdersData = async () => {
    try {
      const allOrdersResponse = await getOrders()
      const allOrdersData = await allOrdersResponse.data
      setPendingOrders(allOrdersData.filter((o) => o.completed === false))
      setCompletedOrders(allOrdersData.filter((o) => o.completed === true))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setOrdersData()
    setView('Pending')
  }, [])

  const orderComplete = async (id) => {
    const updateOrderResponse = await updateOrderStatus(id)
    const updatedOrder = await updateOrderResponse.data
    setCompletedOrders(completedOrders.push(updatedOrder))
    setPendingOrders(
      pendingOrders.filter((o) => {
        return o.id !== updatedOrder.id
      })
    )
  }

  const pendingArray = () => {
    if (pendingOrders.length) {
      return (pendingOrders.map((o) => (
        <li className="list-orderCard" key={o.id}>
          <PendingCard order={o} orderComplete={orderComplete} />
        </li>)
      ))
    } else {
      return (
          <li className='list-noCards'>
              No Pending Orders.
          </li>
      )
    }
  }

  const completedArray = () => {
    if (completedOrders.length) {
      return(completedOrders.map((o) => (
        <li className="list-completedCard" key={o.id}>
          <CompletedCard order={o} />
        </li>
      )))
    } else {
      return (
          <li className='list-noCards'>
             No Completed Orders 
          </li>
      )
    }
  }

  const viewOrders = () => {
    
    if (view === 'Pending') {
      return pendingArray()
    } else {
      return completedArray()
    }
  }

  const handleView = () => {
    console.log(completedOrders)
    setView('Pending')
  }

  return (
    <div className="dashBoard-container">
      <aside>
        <h1>Dashboard</h1>
        <ul className="dashBoard-nav">
          <li onClick={(e) => handleView('Pending')} className={`nav-item ${view === "Pending" ? 'nav-active': null}`}>
            Pending <span>{pendingOrders.length}</span>
          </li>
          <li onClick={(e) => setView('Completed')} className={`nav-item ${view !== "Pending" ? 'nav-active': null}`}>
            Completed
          </li>
        </ul>
      </aside>
      <main>
        <div className="dashBoard-orders-container">
          <ul className="container-orderCards-list">{viewOrders()}</ul>
        </div>
      </main>
    </div>
  )
}

export default DashBoard
