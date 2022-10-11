import './style.css';
import Card from 'react-bootstrap/Card';



const Item = ({ data }) => {
  return (
    <div className='m-5'>
      <Card bg='dark' border='secondary' style={{ width: '15rem' }}>
        <Card.Img variant="top" src={data.img} alt={data.nombre} />
        <Card.Body>
          <Card.Title className='text'>{data.nombre}</Card.Title>
          <Card.Text className='text'>${data.precio}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item;
