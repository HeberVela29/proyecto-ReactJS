import './style.css';
import cart from "../../cart.png"
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Link to={'/cart'}><img className="cart" src= {cart} alt="cart"/></Link>
  )
}

export default CartWidget;