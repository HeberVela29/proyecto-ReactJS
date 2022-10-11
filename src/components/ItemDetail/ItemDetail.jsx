import './style.css';
import Counter from '../Counter/Counter';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const ItemDetail = ({ data }) => {
  const { addToCart } = useContext(CartContext)
  const [disableCount, setDisableCount] = useState(false);
  const [count, setCount] = useState(1);

  function onAdd(data, count) {
    addToCart(data, count)
    setDisableCount(true);
  }
  return (
    <Container>
      <Row>
        <Col className='columna-1'>
          <img className='img-detail' src={data.img} alt={data.nombre} />
        </Col>
        <Col className='columna-2'>
          <p className='text-detail-title'>{data.nombre}</p>
          <p className='text-detail'>{data.descripcion}</p>
          <p className='text-detail'>${data.precio}</p>
          {disableCount ? (<div className='link'><Link to={"/cart"}><Button variant='secondary' className="boton">Ir al carrito</Button></Link></div>
          ) : (
            <Counter count={count} setCount={setCount} stockMax={data.stock} onAdd={onAdd} data={data} />)}

        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail;