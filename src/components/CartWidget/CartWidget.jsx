import './style.css';
import shopcart from "../../shopcart.png"
import { useContext } from "react"
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const {totalItems} = useContext(CartContext); 

  
  return (
    <div className='cartWidget'>
    <h2 className='itemQuantity'>{totalItems()}</h2>
    <Link className="link-cart" to={'/cart'}><img className='shopcart' src= {shopcart} alt="cart"/></Link>
    </div>
    
  )
}

export default CartWidget;