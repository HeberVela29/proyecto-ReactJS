import './style.css';



const Item = ({data}) => {
  return (
    <div className='list'>
      
        <h2>{data.nombre}</h2>
        <img className='img' src={data.img} alt={data.nombre}/>
        <h2>${data.precio}</h2>
      
    </div>
  )
}

export default Item;
