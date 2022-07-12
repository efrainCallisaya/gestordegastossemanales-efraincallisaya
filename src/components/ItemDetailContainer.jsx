import { useState, useEffect } from "react";
import { getItem } from "../mocks/fakeDetail";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDeteailContainer = () => {
  const [data, setData] = useState({});

  const [loading, setLoading] = useState(true);

  const { detalleId } = useParams();

  useEffect(() => {
    getItem
      .then((res) => setData(res.find((detalle) => detalle.id === detalleId)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [detalleId]);


  
  return (
    <div className="bg-warning bg-opacity-25">
      {loading ? (
        <div className="container pt-4">
          <div
            className="card row d-flex justify-content-center"
            aria-hidden="true"
          >
            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <ItemDetail
          name={data.Name}
          description={data.description}
          price={data.price}
          pictureURL={data.pictureURL}
          id={data.id}
          stock={data.stock}
        />
      )}
    </div>
  );
};
export default ItemDeteailContainer;
