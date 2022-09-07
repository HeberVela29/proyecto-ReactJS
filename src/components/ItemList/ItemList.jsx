import './style.css';
import Item from '../Item/Item';

const ItemList = ({products}) => {
  return (
    <>
        {products.map(cel => <Item key={cel.id} data={cel}></Item>)}
    </>
  )
}

export default ItemList;