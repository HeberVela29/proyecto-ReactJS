import './style.css';
import Counter from '../Counter/Counter';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({ data }) => { 
  const {addToCart} = useContext(CartContext)
  const [stock, setStock] = useState(0);

  function onAdd(data) {
    addToCart(data, stock)
  }
  return (
    <>
      <h1>Item detallado</h1>
      <div className='list'>
        <h2>Modelo: {data.nombre}</h2>
        <h2>Marca: {data.marca}</h2>
        <h2>Descripción: {data.descripcion}</h2>
        <h2>Precio: ${data.precio}</h2>
        <img className='img' src={data.img} alt={data.nombre} />
        <Counter stock={stock} setStock={setStock} stockMax={data.stock} />
      </div>
      <div className='link'>
      <Link to={"/cart"}><button className="boton" onClick={() => onAdd(data)}>Agregar al carrito</button></Link>
      </div>
    </>
  )
}

export default ItemDetail;