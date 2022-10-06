import './style.css';
// import mockdata from '../../Data/Data';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';
import ItemList from '../../components/ItemList/ItemList';


const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts();
    // if (categoryName) {
    //   const response = mockdata.filter((response) => response.category === categoryName)
    //   setData(response)
    // } else {
    //   getFetch.then((resp) => setData(resp))
    //     .catch((err) => console.log(err))
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName]);

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, 'Items');
    if (categoryName) {
      const queryFilter = query(querySnapshot, where("category", "==", categoryName))
      getDocs(queryFilter).then((resp) => {
        const data = resp.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
        setData(data);
      })
    } else {
      getDocs(querySnapshot).then((resp) => {
        const data = resp.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
        setData(data);
      })
    }
  }
  // const getFetch = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(mockdata);
  //   }, 2000);
  // });

  return (
    <>
      <ItemList products={data} />
    </>
  )
}

export default ItemListContainer;