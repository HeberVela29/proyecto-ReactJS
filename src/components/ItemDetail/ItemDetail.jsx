import './style.css';
import Counter from '../Counter/Counter';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({ data }) => {
  const { addToCart } = useContext(CartContext)
  const [disableCount, setDisableCount] = useState(false);
  const [count, setCount] = useState(1);

  function onAdd(data, count) {
    addToCart(data, count)
    setDisableCount(true);
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
        {disableCount ? (<div className='link'><Link to={"/cart"}><button className="boton">Ir al carrito</button></Link></div>)
          : (<Counter count={count} setCount={setCount} stockMax={data.stock} onAdd={onAdd} data={data}/>)}
      </div>

    </>
  )
}

export default ItemDetail;