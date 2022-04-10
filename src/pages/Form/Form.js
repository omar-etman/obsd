import { useState } from 'react'
import CheckOutList from '../../components/CheckOutList/CheckOutList';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import './Form.css'
import { addOrder } from '../../redux/orders/ordersActions'

function Form({cart, order}) {

  const formik = useFormik({
      initialValues: {
          orderBy:'',
          mobile:'',
          address:'',
          city:'',
          items:cart
      },onSubmit: values => {
          addOrder(values)
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
                <button type='submit' className='buttons-orderNow'>Order Now</button>
                <button className='buttons-cancel'>cancel</button>
            </div>
        </form>
    </div>
  )
}


function mapStateToProps(state, ownProps) {
    return {
        cart: state.cartReducer.cartItems,
        order: state.ordersReducer.orderLine
    };
  }
  
  export default connect(mapStateToProps)(Form);