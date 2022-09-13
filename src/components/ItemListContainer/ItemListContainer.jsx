import './style.css';
import getFetch from '../../Data/Data';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
      .then((resp) => setData(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, []);


  return (
    <>
      {
        loading ? <h2>Cargando...</h2> :
          <ItemList products={data}></ItemList>
      }
    </>
  )
}

export default ItemListContainer;