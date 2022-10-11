import './style.css';
import Button from 'react-bootstrap/Button';

const Counter = ({ count, setCount, stockMax, onAdd, data }) => {

    const sumar = () => {
        if (count < stockMax) {
            setCount(count + 1);
        }
    }
    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const onAddCart = () => {
        if (count <= stockMax) {
            onAdd(data, count);
        }
    }


    return (
        <>
            <p>Stock disponible: {stockMax}</p>
            <div className='counter'>
                <Button variant="secondary" onClick={restar}>-</Button>{''}
                <span className='counter-span'>{count}</span>
                <Button variant="secondary" onClick={sumar}>+</Button>{''}
                <Button variant="secondary" onClick={onAddCart}>Agregar al carrito</Button>{''}
            </div>
        </>
    )
}

export default Counter;