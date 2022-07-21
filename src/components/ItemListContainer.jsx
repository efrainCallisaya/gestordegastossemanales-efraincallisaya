import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { EcommerBD } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListComponent = ({ componentesI }) => {
  const [productList, setproductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    const productsColection = collection(EcommerBD, "productos");
    
if (categoriaId) {
      const filtercategoria = query(
        productsColection,
        where("categoria", "==", categoriaId)
      );
      getDocs(filtercategoria)
        .then((result) => {
          const prcutosList = result.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setproductList(prcutosList);
          console.log(prcutosList);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      getDocs(productsColection)
        .then((result) => {
          const prcutosList = result.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setproductList(prcutosList);
          console.log(prcutosList);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }


    
  }, [categoriaId]);

  console.log(categoriaId);
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
