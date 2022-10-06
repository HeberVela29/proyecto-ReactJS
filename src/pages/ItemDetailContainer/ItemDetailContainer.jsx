// import mockdata from "../../Data/Data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import ItemDetail from "../../components/ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct();
    // getItem
    //   .then((response) => {
    //     setItemDetail(response.find((product) => product.id === id))
    //   })
    //   .catch((error) => console.log(error))
    //   .finally(() => setLoading(false))
  },);

  // const getItem = new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(mockdata)
  //   }, 2000);
  // })
  const getProduct = () => {
    const db = getFirestore();
    const queryDoc = doc(db, 'Items', id);
    getDoc(queryDoc)
      .then((res) => {
        setItemDetail({id: res.id, ...res.data()});

      })
      .catch(err => console.log(err));
  }


  return (
    <>
      {/* {
        loading ? <h2>Cargando...</h2> :
          
      } */}
      <ItemDetail data={itemDetail} />
    </>

  )
}

export default ItemDetailContainer;