import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { EcommerBD } from "../firebase/firebase";

const ItemDeteailContainer = () => {
  const [data, setData] = useState({});

  const [loading, setLoading] = useState(false);

  const { detalleId } = useParams();

  useEffect(() => {

    
    const productsColection = doc(EcommerBD, "productos", detalleId);
    getDoc(productsColection).then((resultdetail) =>
      setData({ id: resultdetail.id, ...resultdetail.data() })
    );
    setLoading(false);
  }, [detalleId]);

  return (
    <div className="">
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
        <ItemDetail product={data} />
      )}
    </div>
  );
};
export default ItemDeteailContainer;
