import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { EcommerBD } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListComponent = () => {
  const [productList, setproductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();
  
  useEffect(() => {

    const getData = categoriaId ? query(collection(EcommerBD, 'productos'),where ('categoria', '==', categoriaId)) :collection(EcommerBD, 'productos');
      getDocs(getData)
        .then((result) => {
          const prcutosList = result.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setproductList(prcutosList);
         // console.log(prcutosList);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <>
      <div className="">
        {loading ? (
          <div>Cargando...</div>
        ) : (
          <ItemList productList={productList} />
        )}
      </div>
    </>
  );
};
export default ItemListComponent;
