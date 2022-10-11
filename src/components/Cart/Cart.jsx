import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, addDoc, getFirestore, updateDoc, doc } from 'firebase/firestore'
import moment from "moment/moment";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Cart = () => {
  const MySwal = withReactContent(Swal)
  const { cart, clear, removeItem, totalPrecioCart } = useContext(CartContext);
  const navigate = useNavigate();
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
  let nombre = order.buyer.name;

  const createOrder = () => {
    const query = collection(db, 'Orders');
    addDoc(query, order)
      .then(({ id }) => {
        updateStockProducts()
        MySwal.fire({
          title: `${nombre}, gracias por tu compra! 😁
          Tu número de orden es: ${id}`,
          confirmButtonText: 'Cerrar'
        });
      })
      .catch(() => {
        MySwal.fire({
          title: 'Ocurrió un error al generar la orden de compra ☹',
          confirmButtonText: 'Cerrar'
        });
      })
  };

  const updateStockProducts = () => {
    cart.forEach((product) => {
      const queryUpdate = doc(db, "Items", product.id)
      updateDoc(queryUpdate, {
        category: product.category,
        descripcion: product.descripcion,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        stock: product.stock - product.cantidad
      })
        .then(() => {
          console.log('Stock actualizado')
          if (cart[cart.length - 1].id === product.id) {
            clear();
            navigate('/');
          }
        })
        .catch(() => {
          console.log('Error al actualizar stock')
        })
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
      {cart.length === 0 ? (
        <Container className='cart-empty'>
          <h1 className='cart-empty-title'>El carrito está vacío...</h1>
          <Link to={'/'}><Button variant="secondary" className='cart-empty-button'>Ver productos disponibles</Button></Link>
        </Container>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className='cart' >
              <p>{item.nombre}</p>
              <img src={item.img} alt={item.nombre} className='img'></img>
              <p>{item.cantidad}</p>
              <p>${item.precio} c/u</p>
              <p>${item.precio * item.cantidad}</p>
              <Button variant="secondary" onClick={() => removeItem(item.id)}>Eliminar</Button>
            </div>
          ))}
          <div className='cart'>
            <p className='cart-totaltexto'>Total de compra: ${totalPrecioCart()}</p>
            <Button variant="secondary" className='cart-button' onClick={() => clear()}>Limpiar carrito</Button>
          </div>
          <div className='form'>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" name="name" placeholder="Nombre" value={order.buyer.name} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="phone" name="phone" placeholder="Teléfono" value={order.buyer.phone} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Control type="email" name="email" placeholder="Email" value={order.buyer.email} onChange={handleInputChange} />
              </Form.Group>
              <Button variant="secondary" onClick={() => createOrder()}>Crear orden de compra</Button>
            </Form>
          </div>
        </div>
      )}
    </>
  )
}

export default Cart