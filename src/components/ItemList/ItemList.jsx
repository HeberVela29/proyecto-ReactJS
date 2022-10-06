import './style.css';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';


const ItemList = ({ products }) => {
  return (
    <>
      {products.map((data) => (
        <Link className='detail-link' key={data.id} to={'/detalle/' + data.id}>
          <Item data={data}></Item>
        </Link>
      ))
      }
    </>
  )
}

export default ItemList;