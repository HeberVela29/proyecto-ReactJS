import { useState } from 'react';
import './style.css';

const Counter = (props) => {
    const [stock, setStock] = useState(0);
    const sumar = () => {
        if (stock < props.stockMax) {
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
    <div className='counter'>
        <button className='boton' onClick={restar}>-</button>
        <h1>{stock}</h1>
        <button className='boton' onClick={sumar}>+</button>
    </div> 
    <h1>Stock máximo: {props.stockMax}</h1>
    </>
  )
}

export default Counter;