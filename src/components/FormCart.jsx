import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { EcommerBD } from "../firebase/firebase";
import { Link } from "react-router-dom";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FormCart = () => {
  const { fullcartprice, productosCart, clearCart } = useContext(CartContext);
  //const EmailValid =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

  const [Name, setName] = useState(null);
  const [apellido, setApellido] = useState(null);
  const [email, setEmail] = useState(null);
  const [celular, setcelular] = useState(null);
  const [Fecha, setFecha] = useState(null);
  const [tarjeta, setTarjeta] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [idVenta, setIdVenta] = useState("");
  const [enviar, setEnviar] = useState(false);

  const clearformulario = () => {
    if (enviar === true) {
      setName(null);
      setApellido(null);
      setEmail(null);
      setcelular(null);
      setFecha(null);
      setTarjeta(null);
      setCvv(null);
      setEnviar(false);
    }
  };

  const enviarFormulario = () => {
    if (
      Name != null &&
      apellido != null &&
      email != null &&
      tarjeta != null &&
      cvv != null &&
      celular != null &&
      Fecha != null &&
      idVenta != null
    ) {
      setEnviar(true);
      const ColectionVentas = collection(EcommerBD, "ventas");

      addDoc(ColectionVentas, {
        Datos: datosDeCompra,
        productos: productosCart,
        total: fullcartprice(),
        date: serverTimestamp(),
      }).then((result) => {
        clearCart();
        setIdVenta(result.id);
        toast("Compra se realizo con exito");
        clearformulario();
      });

      productosCart.forEach((product) => {
        const updateCollection = doc(EcommerBD, "productos", product.id);
        updateDoc(updateCollection, { stock: product.stock - product.qty });
      });
    } else {
      toast("Por favor complete todos los campos");
    }
  };
  const datosDeCompra = {
    Name,
    apellido,
    email,
    tarjeta,
    cvv,
    celular,
    Fecha,
  };

  return (
    <>
      <div className="container">
        <div className="container p-3">
          <div className="card px-4">
            <h3 className="h8 py-3">Ingrese datos de compra</h3>
            <p>
              Recuerde que los campos con "
              <span className="text-danger">*</span>" son obligatorios
            </p>
            <div className="row gx-3">
              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Nombre</p>
                  <input
                    className=" mb-3"
                    type="text"
                    placeholder="Nombre"
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Apellido</p>
                  <input
                    className=" mb-3"
                    type="text"
                    placeholder="Apellido"
                    onChange={(event) => setApellido(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Celular</p>
                  <input
                    className=" mb-3"
                    type="number"
                    placeholder="Celular"
                    onChange={(event) => setcelular(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1">
                    Email<span className="text-danger">*</span>
                  </p>
                  <input
                    className=" mb-3"
                    type="text"
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1">
                    Numero de tarjeta<span className="text-danger">*</span>
                  </p>
                  <input
                    className=" mb-3"
                    type="number"
                    maxLength="16"
                    onChange={(event) => setTarjeta(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column">
                  <p className="text mb-1">
                    Fecha de vencimiento<span className="text-danger">*</span>
                  </p>
                  <input
                    className=" mb-3"
                    type="number"
                    placeholder="MM/YY"
                    maxLength="5"
                    onChange={(event) => setFecha(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column">
                  <p className="text mb-1">
                    Ingrese CVV<span className="text-danger">*</span>
                  </p>
                  <input
                    className=" mb-3"
                    type="number"
                    placeholder="***"
                    maxLength="5"
                    onChange={(event) => setCvv(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-12 ">
                <div>
                  
                  {enviar ? (
                      <Link to="/" className="ps-3 btn btn-primary mb-3">Volver a Home</Link>
                  ) : (
                    <button
                      className="ps-3 btn btn-success mb-3"
                      onClick={(event) => enviarFormulario(event)}
                    >
                      Finalizar compra
                    </button>
                  )}
                  </div>
                  <div>
                  {idVenta ? (
                    <div className="d-flex flex-column">
                      <h5>Su ID de compra es :</h5>
                      <p>{idVenta}</p>
                    </div>
                  ) : null}
                  </div>
                  <ToastContainer />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
