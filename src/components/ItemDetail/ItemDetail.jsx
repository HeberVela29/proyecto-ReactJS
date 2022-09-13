import './style.css';
import Counter from '../Counter/Counter';

const ItemDetail = ({ data }) => {
  return (
    <>
      <h1>Item detallado</h1>
      <div className='list'>
        
        <h2>Modelo: {data.nombre}</h2>
        <h2>Marca: {data.marca}</h2>
        <h2>Descripción: {data.descripcion}</h2>
        <h2>Precio: ${data.precio}</h2>
        <img className='img' src={data.img} alt={data.nombre} />
        <Counter stockMax={data.stock} />
      </div>
    </>
  )
}

export default ItemDetail;