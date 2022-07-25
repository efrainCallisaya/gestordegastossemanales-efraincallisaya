import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { EcommerBD } from "../firebase/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FormCart = () => {
  const { fullcartprice, productosCart } = useContext(CartContext);
  //const EmailValid =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

  const [Name, setName] = useState(null);
  const [apellido, setApellido] = useState(null);
  const [email, setEmail] = useState(null, false);
  const [celular, setcelular] = useState(null);
  const [Fecha, setFecha] = useState(null);
  const [tarjeta, setTarjeta] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [idVenta, setIdVenta] = useState("");
  const [enviar, setEnviar] = useState(false);

  const valueTarjeta = (event) => {
    event.preventDefault();
    setTarjeta(event.target.value);
  };
  const valueCvv = (event) => {
    event.preventDefault();
    setCvv(event.target.value);
  };

  const valueDate = (event) => {
    event.preventDefault();
    setFecha(event.target.value);
  };

  const valuename = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const valueapellido = (event) => {
    event.preventDefault();
    setApellido(event.target.value);
  };
  const valueemail = (event) => {
    setEmail(event.target.value);
  };

  const valuecelular = (event) => {
    event.preventDefault();
    setcelular(event.target.value);
  };
  const enviarFormulario = () => {
    if (
      Name != null &&
      apellido != null &&
      email != null &&
      tarjeta != null &&
      cvv != null &&
      celular != null &&
      Fecha != null
    ) {
      setEnviar(true);
      const ColectionVentas = collection(EcommerBD, "ventas");
      console.log(ColectionVentas);
      addDoc(ColectionVentas, {
        Datos: datosDeCompra,
        productos: productosCart,
        total: fullcartprice(),
        date: serverTimestamp(),
      }).then((result) => {
        setIdVenta(result.id);
      });
      console.log(idVenta);

      productosCart.forEach((product) => {
        const updateCollection = doc(EcommerBD, "productos", product.id);
        updateDoc(updateCollection, { stock: product.stock - product.qty });
      });
      toast("Compra realizada con exito")
      toast("su key de compra es: " + idVenta)
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
            <p className="h8 py-3">Ingrese datos de compra</p>
            <div className="row gx-3">
              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Nombre</p>
                  <input
                    className=" mb-3"
                    type="text"
                    placeholder="Nombre"
                    onChange={(event) => valuename(event)}
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
                    onChange={(event) => valueapellido(event)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Celular</p>
                  <input
                    className=" mb-3"
                    type="text"
                    placeholder="Celular"
                    onChange={(event) => valuecelular(event)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Email</p>
                  <input
                    className=" mb-3"
                    type="text"
                    placeholder="Email"
                    onChange={(event) => valueemail(event)}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Numero de tarjeta</p>
                  <input
                    className=" mb-3"
                    type="text"
                    onChange={(event) => valueTarjeta(event)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Fecha de vencimiento</p>
                  <input
                    className=" mb-3"
                    type="text"
                    placeholder="MM/YYYY"
                    onChange={(event) => valueDate(event)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column">
                  <p className="text mb-1">CVV/CVC</p>
                  <input
                    className=" mb-3 pt-2 "
                    type="password"
                    placeholder="***"
                    onChange={(event) => valueCvv(event)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div>
                  <button
                    className="ps-3 btn btn-primary mb-3"
                    onClick={(event) => enviarFormulario(event)}
                  >
                    
                    Finalizar compra
                  </button>
                  <ToastContainer/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
