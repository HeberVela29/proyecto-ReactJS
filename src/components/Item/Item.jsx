import './style.css';


const Item = ({data}) => {
  return (
    <div className='list'>
      <h2>{data.id}</h2>
      <h2>{data.nombre}</h2>
      <h2>${data.precio}</h2>
      <img className='img' src={data.img} alt='imgcel' />
    </div>
  )
}

export default Item;
