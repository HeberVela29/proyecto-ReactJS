import './style.css';
import Counter from '../Counter/Counter';


const Item = ({data}) => {
  return (
    <div className='list'>
      <h2>{data.id}</h2>
      <h2>{data.nombre}</h2>
      <h2>${data.precio}</h2>
      <img className='img' src={data.img} alt={data.nombre}/>
      <Counter stockMax={data.stock}/>
    </div>
  )
}

export default Item;
