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
      <ul className="list-group list-group-numbered">
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
      <div className="row d-flex justify-content-between bg-warning py-2">
        <div>
          <h2> total de productos </h2>
          <h2> {qtyProductos} </h2>
        </div>
        <div>
          <h2> Total de compra </h2>
          <div className="price d-flex flex-row align-items-center">
            <h2 className="act-price">
              {productosCart.reduce((acc, cur) => {
                return acc + cur.price * cur.qty;
              }, 0)}
            </h2>
          </div>
        </div>
      </div>
      <button
        className="btn btn-danger text-uppercase mr-2 px-4 mb-3 mx-1"
        onClick={() => clearCart()}
      >
        eliminar Carrito
      </button>
    </>
  );
};
export default Cart;
