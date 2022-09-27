import './style.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const Cart = () => {
  const { cart, clear, removeItem } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <>
          <h2>El carrito está vacio</h2>
          <Link to={'/'}><button>Ver productos disponibles</button></Link>
        </>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className='cart' >
              <h3>{item.nombre}</h3>
              <img src={item.img} alt={item.nombre} className='img'></img>
              <h3>{item.cantidad}</h3>
              <h3>${item.precio} c/u</h3>
              <h3>${item.precio*item.cantidad}</h3>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
          ))}
          <div className='total'>
          <h2>TOTAL:$</h2>
          <button>Terminar mi compra</button>
          </div>
          
          <button onClick={() => clear()}>Limpiar carrito</button>
        </>
      )}
    </div>
  )
}

export default Cart