import './style.css';
import mockdata from '../../../Data/Data';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../ItemList/ItemList';


const ItemListContainer = () => {
  const { categoryName } = useParams();
  console.log(categoryName);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryName) {
      const response = mockdata.filter((response) => response.category === categoryName)
      setData(response)
    } else {
      getFetch.then((resp) => setData(resp))
        .catch((err) => console.log(err))
    }
  }, [categoryName]);

  const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockdata);
    }, 2000);
  });

  return (
    <>
      <ItemList products={data}/>
    </>
  )
}

export default ItemListContainer;