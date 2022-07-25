
import { useState,useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import {CartContext} from "../context/CartContext";
export const ItemDetail = ({
  product
}) => {

  const [status, setStatus] = useState(false);
  const {addCartProducto} = useContext(CartContext);

  const onAdd = (contador) => {
    addCartProducto({...product, qty: contador});
    setStatus(true);
  };
  return (
    <div className="container fluid pb-5">
      <div className="row d-flex justify-content-between bg-warning py-2">
      
        <div className="col-md-10">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <div className="text-center p-4">
                  <img src={product.pictureURL} className="img-thumbnail" alt="..." width="100%"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className=" row 1 d-flex justify-content-center align-items-center">
                  <div className="product p-4">
                    <h5 className="text-uppercase" key={product.id}>
                      {product.name}
                    </h5>
                    <div className="price d-flex flex-row align-items-center">
                      <span className="act-price">${product.price}</span>
                    </div>
                  </div>
                  <p className="about mx-3">{product.description}</p>
                  <div className="cart mt-4 align-items-center ">
                    {status ? (
                      <Link to="/cart">
                        <button className="btn btn-primary text-uppercase mr-2 px-4 mb-3">
                          comprar
                        </button>
                      </Link>
                    ) : (
                      <ItemCount stock={product.stock} inicial={1} onAdd={onAdd}/>
                    )}
                    <i className="fa fa-heart text-muted"></i>
                    <i className="fa fa-share-alt text-muted"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
