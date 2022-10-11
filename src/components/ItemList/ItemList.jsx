import './style.css';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';


const ItemList = ({ products }) => {
  return (
    <div className='lista-item'>
      {products.map((data) => (
        <Link className='detail-link' key={data.id} to={'/detalle/' + data.id}>
          <Item data={data}></Item>
        </Link>
      ))
      }
    </div>
  )
}

export default ItemList;