import { useState } from 'react'
import CartItemCard from '../../components/CartItemCard/CartItemCard'
import './Form.css'

function Form() {

  //recieves the cart array
  //sends orders to dashboard

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const updateName = (e) => {
      setName(e.target.value)
  }

  const updateMobile = (e) => {
      setMobile(e.target.value)
  }

  const updateAddress = (e) => {
      setAddress(e.target.value)
  }

  const updateCity = (e) => {
      setCity(e.target.value)
  }

  return (
    <div className='form-container'>
        <div className='form-orders'>
            <ul className='ordered-cartItems-list'>
                <li><CartItemCard/></li>
                <li><CartItemCard/></li>
                <li><CartItemCard/></li>
                <li><CartItemCard/></li>
            </ul>
            <p className='orders-subTotal'>Subtotal: LE subtotal</p>
        </div>
        <form>
            <label htmlFor="name">
                Name
                <input
                    id="name"
                    onChange={updateName}
                    value={name}
                    placeholder="i.e John Smith"
                />
            </label>
            <label htmlFor="mobile">
                Mobile
                <input
                    id="mobile"
                    onChange={updateMobile}
                    value={mobile}
                    placeholder="+201234567890"
                />
            </label>
            <label htmlFor="address">
                Address
                <input
                    id="name"
                    onChange={updateAddress}
                    value={address}
                    placeholder="residence number, street, area."
                />
            </label>
            <label htmlFor="city">
                City
                <input
                    id="city"
                    onChange={updateCity}
                    value={city}
                    placeholder="Cairo, Egypt"
                />
            </label>
            <div className='form-buttons'>
                <button className='buttons-orderNow'>Order Now</button>
                <button className='buttons-cancel'>cancel</button>
            </div>
        </form>
    </div>
  )
}

export default Form