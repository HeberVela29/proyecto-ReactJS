import './style.css';
import shopcart from "../../shopcart.png"
import { useContext } from "react"
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const {cart} = useContext(CartContext); 

  return (
    <div className='cartWidget'>
    <h2 className='itemQuantity'>{cart.length}</h2>
    <Link to={'/cart'}><img className="cart" src= {shopcart} alt="cart"/></Link>
    </div>
    
  )
}

export default CartWidget;