import React, { useState, useEffect } from "react";

export const CartContext = React.createContext();


const CartProvider = ({ children }) => {
  const [productosCart, setProductosCart] = useState([]);
  const [qtyProductos, setQtyProductos] = useState(0);
  console.log(productosCart);
  console.log(qtyProductos);
  

  useEffect(() => {
    getQtyCarProductos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productosCart]);

  const addCartProducto = (producto) => {
    if (isInCart(producto.id)) {
      const found = productosCart.find((p) => p.id === producto.id);
      const index = productosCart.indexOf(found);
      const aux = [...productosCart];
      aux[index].qty += producto.qty;
      setProductosCart(aux);
    } else {
      setProductosCart([...productosCart, producto]); 
    }
  };
  const fullcartprice = () => 
    productosCart.reduce((acc, total) =>  acc + total.price * total.qty, 0)
  
  const deleteCartProducto = (id) => {
    setProductosCart(productosCart.filter((p) => p.id !== id));
  };


  const isInCart = (id) => {
    return productosCart.some((productoCar) => productoCar.id === id);
  };

  const getQtyCarProductos = () => {
    let qty = 0;
    productosCart.forEach((productoCart) => (qty += productoCart.qty));
    setQtyProductos(qty);
  };

  const clearCart = () => {
    setProductosCart([]);
    setQtyProductos(0);
  };
  return (
    <CartContext.Provider
      value={{
        productosCart,
        addCartProducto,
        deleteCartProducto,
        isInCart,
        getQtyCarProductos,
        qtyProductos,
        clearCart,
        fullcartprice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
