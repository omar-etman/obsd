import { useState, useEffect } from 'react'
import { getOrders} from '../../API'
import OrderCard from '../../components/OrderCard/OrderCard'
import './DashBoard.css'
function DashBoard({ order }) {
  
  const [pendingOrders, setPendingOrders] = useState([])
  const [completedOrders, setCompletedOrders] = useState([])
  const [view, setView] = useState('')

  const setPendingOrdersData = async () => {
      try{
          const allOrdersResponse = await getOrders()
          const allOrdersData = await allOrdersResponse.data
          setPendingOrders(allOrdersData.filter((o) => o.completed === false))
          setCompletedOrders(allOrdersData.filter((o) => o.completed ===  true))
      }catch(error){
        console.log(error)
      }
  }

  useEffect(() => {
      setPendingOrdersData()
      setView("Pending")
  }, [])


  return (
    <div className="dashBoard-container">
      <aside>
        <h1>Dashboard</h1>
        <ul className="dashBoard-nav">
          <li onClick={(e) => setView('Pending')} className="nav-item">
            Pending <span>{pendingOrders.length}</span>
          </li>
          <li onClick={(e) => setView('Completed')} className="nav-item">
            Completed
          </li>
        </ul>
      </aside>
      <main>
          <div className="dashBoard-orders-container">
            <ul className="container-orderCards-list">
                {
                    view === 'Pending' 
                    ?pendingOrders.map((o) => (
                        <li className="list-orderCard" key={o.id}>
                            <OrderCard
                                orders={o}
                            />
                        </li>
                    )) 
                    :completedOrders.map((o) => (
                        <li key={o.id}>
                            <OrderCard
                                orders={o}
                            />
                        </li>
                    ))
                }
              
            </ul>
          </div>
      </main>
    </div>
  )
}

export default DashBoard
