import { useState } from 'react'
import { useSelector } from 'react-redux'
import './DashBoard.css'
function DashBoard({order}) {
  

  const cart = useSelector((state) => state.cartReducer.cartItems)
  
  const [pendingView, setPendingView] = useState(false)
  const [completedView, setCompletedView] = useState(true)
  const dashBoardToggler = (e) => {
      setCompletedView(!completedView)
      setPendingView(!pendingView)
  }

  return (
    <div className='dashBoard-container'>
        <aside>
            <h1>Dashboard</h1>
            <ul className='dashBoard-nav'>
                <li onClick={dashBoardToggler} className='nav-item'>Pending  <span>{order.length}</span></li>
                <li onClick={dashBoardToggler} className='nav-item'>Completed</li>
            </ul>
        </aside>
        <main>
            { pendingView === true?
                <div className='dashBoard-pending-container'>
                    <ul className='pending-list'>
                        <li>pending</li>
                        <li>pending</li>
                        <li>pending</li>
                        <li>pending</li>
                    </ul>
                </div>
                :null
            }
            { completedView === true?
                <div className='dashBoard-completed-container'>
                    completed
                </div>
                :null
            }
        </main>
    </div>
  )
}

export default DashBoard