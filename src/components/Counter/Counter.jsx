import './style.css';

const Counter = ({ count, setCount, stockMax, onAdd, data}) => {
    
    const sumar = () => {
        if (count < stockMax) {
            setCount(count + 1);
        }
    }
    const restar = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const onAddCart = () => {
        if (count <= stockMax) {
          onAdd(data, count)
        }
      }
  

    return (
        <>
            <h3>Stock máximo: {stockMax}</h3>
            <div className='counter'>
                <button className='boton' onClick={restar}>-</button>
                <h1>{count}</h1>
                <button className='boton' onClick={sumar}>+</button>
                <button onClick={onAddCart}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default Counter;