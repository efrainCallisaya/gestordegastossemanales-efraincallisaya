import { useContext } from "react";
import {Link} from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
  const {
    productosCart,
    qtyProductos,
    clearCart,
    fullcartprice,
    deleteCartProducto,
  } = useContext(CartContext);

  if(productosCart.length === 0) {
    return (
      <div className="cart">
        <h3> <Link to ="/">No hay productos en el carrito, Precione AQUI para ir a comprar</Link></h3>
      </div>
    );
  }

  const eliminar = (id) => {
    deleteCartProducto(id);
  };

  




  return (
    <>
      <ul className="list-group">
        {productosCart.map((item) => {
          return (
            <ItemCart
              name={item.Name}
              key={item.id}
              description={item.description}
              price={item.price}
              pictureURL={item.pictureURL}
              id={item.id}
              qty={item.qty}
              eliminar={eliminar}
            />
          );
        })}
      </ul>
      <div className="bg-warning py-3">
        <div className="text-center">
          <h2> Cantidad total de productos </h2>
          <h2> {qtyProductos} </h2>
        </div>
        <div className="text-center">
          <h2> Total de compra </h2>
          <div className="price  flex-row text-center">
            <h2 className="act-price ">
              {fullcartprice()}
            </h2>
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-center  my-5">

      <button
        className="btn btn-danger text-uppercase  me-5"
        onClick={() => clearCart()}
          >
        eliminar Carrito
      </button>
        <Link to="/FormCart">
        
        <button
        className="btn btn-success text-uppercase ms-5">
        Finalizar compra
        </button>
        </Link>
      


      </div>
      
    </>
  );
};
export default Cart;
