import './style.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (<h2>El carrito está vacio</h2>) : (
        <>
          {/* {cart.map((item) => (
            <div key={item.id} className='cart' >
              <h3>{item.nombre}</h3>
              <img src={item.img} alt={item.nombre} className='img'></img>
              <h3>{item.cantidad}</h3>
              <h3>{item.precio}</h3>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
          ))}
          <h2>TOTAL:</h2> */}
        </>
      )}
    </div>
  )
}

export default Cart