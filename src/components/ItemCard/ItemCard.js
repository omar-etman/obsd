import './ItemCard.css'
import { addToCart, reduceFromCart } from '../../redux/reducers/app'
import { useSelector, useDispatch } from 'react-redux'

function ItemCard({ item }) {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.app.cart)

  const add = () => {
    dispatch(addToCart(item))
  }

  const subtract = () => {
    dispatch(reduceFromCart(item))
  }

  const quan = (item) => {
    if (cart.length > 0) {
      const x = cart.filter((el) => {
        return el?.name === item?.name
      })
      if (x.length > 0)
        return cart.filter((el) => el?.name === item?.name)[0]['quantity']
    }

    return 0
  }

  return (
    <div className="card-container" style={{ width: '22em', height: '17em' }}>
      <img
        src={item?.image}
        alt="itemImg"
        className="card-img"
        style={{ width: '10em', height: '10em' }}
      />
      <div className="card-info">
        <div className="item-details">
          <h3 className="item-name">{item?.name}</h3>
          <p className="item-ingredients">{item?.description}</p>
          <span className="item-price">Price: {item?.price}</span>
        </div>
        <div className="card-incrementor">
          <button onClick={subtract} className="incrementor-btn minus">
            -
          </button>
          <p className="incrementor-display">{quan(item)}</p>
          <button onClick={add} className="incrementor-btn">
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
