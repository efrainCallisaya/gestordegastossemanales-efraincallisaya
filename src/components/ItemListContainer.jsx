import { getData } from "../mocks/fakeApi";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";

import { useParams } from "react-router-dom";

const ItemListComponent = ({ componentesI }) => {
  const [productList, setproductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId) {
      getData().then((res) =>
        setproductList(
          res.filter((product) => product.categoria === categoriaId)
        )
      );
      getData().catch((err) => console.log(err));
      getData().finally(() => setLoading(false));
    } else {
      getData().then((res) => setproductList(res));
      getData().catch((err) => console.log(err));
      getData().finally(() => setLoading(false));
    }
  }, [categoriaId]);

  console.log(categoriaId);
  return (
    <>
      <div className="bg-warning bg-opacity-25">
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
