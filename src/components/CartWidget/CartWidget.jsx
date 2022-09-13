import './style.css';
import cart from "../../cart.png"

const CartWidget = () => {
  return (
    <img className="cart" src= {cart} alt="cart"/>
  )
}

export default CartWidget;