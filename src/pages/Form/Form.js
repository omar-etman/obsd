import { useState } from 'react'
import CheckOutList from '../../components/CheckOutList/CheckOutList';
import { useFormik } from 'formik';
import './Form.css'
import { addOrder } from '../../redux/reducers/app'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'

function Form() {
  
  const cart = useSelector((state) => state.app.cart )
  const order = useSelector((state) => state.app.orders )
  const dispatch = useDispatch()
  const formik = useFormik({

      initialValues: {
          orderBy:'',
          mobile:'',
          address:'',
          city:'',
          items:cart
      },onSubmit: values => {
          dispatch(addOrder(values))
          console.log("values:", values)
          console.log(order)
      }
  })
  

  return (
    <div className='form-container'>
        <div className='form-orders'>
            <CheckOutList/>
        </div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="orderBy">
                Name
                <input
                    id="orderBy"
                    onInput={formik.handleChange}
                    value={formik.values.orderBy}
                    placeholder="i.e John Smith"
                />
            </label>
            <label htmlFor="mobile">
                Mobile
                <input
                    id="mobile"
                    onInput={formik.handleChange}
                    value={formik.values.mobile}
                    placeholder="+201234567890"
                />
            </label>
            <label htmlFor="address">
                Address
                <input
                    id="address"
                    onInput={formik.handleChange}
                    value={formik.values.address}
                    placeholder="residence number, street, area."
                />
            </label>
            <label htmlFor="city">
                City
                <input
                    id="city"
                    onInput={formik.handleChange}
                    value={formik.values.city}
                    placeholder="Cairo, Egypt"
                />
            </label>
            <div className='form-buttons'>
                <button onClick={formik.handleSubmit} className='buttons-orderNow'>Order Now</button>
                <button className='buttons-cancel'>cancel</button>
            </div>
        </form>
    </div>
  )
}

  
  export default Form;