import CheckOutList from '../../components/CheckOutList/CheckOutList';
import {useNavigate} from "react-router-dom"
import { useFormik } from 'formik';
import './Form.css'
import { addOrder } from '../../redux/reducers/app'
import {useSelector} from 'react-redux'
import {createOrder} from '../../API'

function Form() {
  
  const cart = useSelector((state) => state.app.cart )
  const navigate = useNavigate()
  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity
  }, 0)

  const items = cart.map((el) => {
        return (
            {
                id: el.id,
                quantity: el.quantity
            }
         )
    })

  const formik = useFormik({

      initialValues: {
          name:'',
          mobile:'',
          address:'',
          city:'',
      },onSubmit: values => {
          const payload = {
            ...values, 
            items, 
            totalPrice
          }
          createOrder(payload)
          console.log(values)
          console.log(payload)
          navigate('/complete')
      }
  })
  

  return (
    <div className='form-container'>
        <div className='form-orders'>
            <CheckOutList/>
        </div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">
                Name
                <input
                    id="name"
                    onInput={formik.handleChange}
                    value={formik.values.name}
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