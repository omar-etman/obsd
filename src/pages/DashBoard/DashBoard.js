import { useState } from 'react'
import './DashBoard.css'
function DashBoard() {

  const [pendingView, setPendingView] = useState(true)
  const [completedView, setCompletedView] = useState(false)
  const dashBoardToggler = (e) => {
      setCompletedView(!completedView)
      setPendingView(!pendingView)
  }

  return (
    <div className='dashBoard-container'>
        <aside>
            <ul className='dashBoard-nav'>
                <li onClick={dashBoardToggler} className='nav-item'>Pending</li>
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
        dashboard
    </div>
  )
}

export default DashBoard