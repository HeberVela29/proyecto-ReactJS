import './style.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import moment from "moment/moment";


const Cart = () => {
  const { cart, clear, removeItem, totalPrecioCart } = useContext(CartContext);
  const [order, setOrder] = useState({
    buyer: {
      name: "",
      phone: "",
      email: ""
    },
    items: cart,
    total: cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
    date: moment().format("DD/MM/YYYY, h:mm:ss a")
  })
  const db = getFirestore();

  const createOrder = () => {
    const query = collection(db, 'Orders');
    addDoc(query, order)
      .then(({id}) => {
        alert(`Gracias por tu compra. El id de tu orden es:  ${id}`)
      })
      .catch(() => {
        alert('Ocurrió un error al generar la orden')
      })
  }

  const handleInputChange = (e) => {
    setOrder({
      ...order,
      buyer: {
        ...order.buyer,
        [e.target.name]: e.target.value,
      }
    });
  };

  return (
    <>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <>
          <h2>El carrito está vacio</h2>
          <Link to={'/'}><button>Ver productos disponibles</button></Link>
        </>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className='cart' >
              <h3>{item.nombre}</h3>
              <img src={item.img} alt={item.nombre} className='img'></img>
              <h3>{item.cantidad}</h3>
              <h3>${item.precio} c/u</h3>
              <h3>${item.precio * item.cantidad}</h3>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
          ))}
          <div className='total'>
            <h3>TOTAL: ${totalPrecioCart()}</h3>

            {cart.length > 0 ?
              <>
                <div>
                  <input className="input" name="name" type="text" placeholder="Nombre" value={order.buyer.name} onChange={handleInputChange} />
                </div>
                <div>
                  <input className="input" name="phone" type="phone" placeholder="Phone" value={order.buyer.phone} onChange={handleInputChange} />
                </div>
                <div>
                  <input className="input" name="email" type="email" placeholder="Email" value={order.buyer.email} onChange={handleInputChange} />
                </div>
              </>
              : ""}
            <button onClick={() => createOrder()}>Crear orden de compra</button>
          </div>

          <button onClick={() => clear()}>Limpiar carrito</button>
        </div>
      )}
    </>
  )
}

export default Cart