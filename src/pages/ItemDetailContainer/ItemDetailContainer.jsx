import mockdata from "../../Data/Data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log(id)

  const [itemDetail, setItemDetail] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    getItem
      .then((response) => {
        setItemDetail(response.find((product) => product.id === id))
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
 
  }, [id]);

  const getItem = new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockdata)
    }, 2000);
  })

  return (
    <>
      {
        loading ? <h2>Cargando...</h2> :
          <ItemDetail data={itemDetail} />
      }
    </>

  )
}

export default ItemDetailContainer;