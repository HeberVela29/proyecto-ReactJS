import './style.css';

const Counter = ({stock, setStock, stockMax}) => {
    
    const sumar = () => {
        if (stock < stockMax) {
            setStock(stock + 1);
        }
    }
    const restar = () => {
        if (stock > 0) {
            setStock(stock - 1);
        }
    }
  return (
    <>
    <h3>Stock máximo: {stockMax}</h3>
    <div className='counter'>
        <button className='boton' onClick={restar}>-</button>
        <h1>{stock}</h1>
        <button className='boton' onClick={sumar}>+</button>
    </div> 
    </>
  )
}

export default Counter;