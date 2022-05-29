import Nav from '../components/Nav/Nav';
import Home from './HomePage/Home';
import Form from './Form/Form';
import Cart from '../components/Cart/Cart';
import DashBoard from './DashBoard/DashBoard';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useState, useEffect } from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import {useSelector} from 'react-redux'

function App() {

  const cart = useSelector((state) => state.app.cart)
  const [dropDown3, viewDropDown3] = useState(false);

  const toggleDropDown3 = (e) => {
    console.log(dropDown3)
    viewDropDown3(!dropDown3)
  }
  
  useEffect(()=>{
    if(cart.length === 0) viewDropDown3(false)
    
  },[cart.length])

  return (
    <div className="App">
      <BrowserRouter>
          <header className="App-header">
            <Nav
              dropDown3 = {dropDown3}
              toggleDropDown3 = {toggleDropDown3}
            />
          </header>
          {
            dropDown3 === true ?
            <div className='App-Cart'>
              <Cart
              toggleDropDown3={toggleDropDown3}
              />
            </div>
            : null
          }
          <Routes>
            <Route path = "/" element={<Home 
              dropDown={dropDown3}
            />}/>
            <Route path = "/form" element={<Form/>}/>
            <Route path = "/dashboard" element={<DashBoard/>}/>
          </Routes>
          <footer className='App-footer'>
            <div className='footer-brand'>
              <h4 className='footer-brand-name'>
                OBSD
              </h4>
              <RestaurantIcon className='footer-logo icon'/>
            </div>
            <p className='brand-copyright'><span>&#169;</span>2022 OBSD - All Rights Reserved.</p>
          </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
