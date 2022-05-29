import { Link } from 'react-router-dom'
import { Badge } from '@mui/material'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Cart from '../Cart/Cart'
import BikeIcon from '../../assets/fastDelivery.png'
import './Nav.css'
import {useSelector} from 'react-redux'

function Nav({dropDown3, toggleDropDown3, viewDropDown3}) {
  
  const cart = useSelector((state) => state.app.cart)
  return (
    <div className='nav-container'>
        <Link to = "/">
            <div className='nav-brand'>
                <span className='brand-name'>OBSD</span>
                <span className='brand-logo icon'>
                    <RestaurantIcon/>
                </span>
            </div>
        </Link>
        <ul className='nav-buttons'>
            <li className='buttons-btn'>Menu</li>
            <li className='buttons-btn'>Most Popular</li>
            <li className='buttons-bikeBtn' onClick={toggleDropDown3}>
                <Badge badgeContent={cart?.length} color="primary" >
                    <img src={BikeIcon} alt='bikeIcon' className='bikebtn-icon'/>
                </Badge>
            </li>
            {
                dropDown3 === true ?

                <div className='nav-dropDown-3'>
                    <Cart/>
                </div>

                : null
            }
        </ul>
    </div>
  )
}

export default Nav