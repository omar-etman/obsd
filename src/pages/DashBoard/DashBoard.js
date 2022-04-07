import { useState } from 'react'
import './DashBoard.css'
function DashBoard() {

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
                <li onClick={dashBoardToggler} className='nav-item'>Pending  <span>#</span></li>
                <li onClick={dashBoardToggler} className='nav-item'>Completed</li>
            </ul>
        </aside>
        <main>
            { pendingView === true?
                <div className='dashBoard-pending-container'>
                    pending
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