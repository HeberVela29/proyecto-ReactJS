import getFetch from "../../Data/Data";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState([]);

  useEffect(() => {
    getItem
    .then((response) => {
      setItemDetail(response.find(el => el.id === 1))
    })
    .catch((error) => console.log(error));
  })

  const getItem = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(getFetch)
      }, 2000);
  })

  return (
    <ItemDetail data = {itemDetail}/>
  )
}

export default ItemDetailContainer;