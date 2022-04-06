import Nav from '../components/Nav/Nav';
import Home from './HomePage/Home';
import Form from './Form/Form';
import Cart from '../components/Cart/Cart';
import DashBoard from './DashBoard/DashBoard';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useState } from 'react'
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';

function App() {

  const [dropDown3, viewDropDown3] = useState(false);

  const toggleDropDown3 = (e) => {
      viewDropDown3(!dropDown3)
  }

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
              <Cart/>
            </div>
            : null
          }
          <Routes>
            <Route path = "/" element={<Home/>}/>
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
            <p><span>&copy</span>2022 OBSD - All Rights Reserved.</p>
          </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
