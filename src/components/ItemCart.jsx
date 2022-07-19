


const ItemCart = ({ name, price, qty, key, pictureURL, id, eliminar}) => {
  

  return (
    <li className="list-group-item" key={key}>
    <div className="row">
      <div className="col-md-2">
        <img key={key} src={pictureURL} width="100%" />
      </div>
      <div className="col-md-10">
        <div className="row">
          <div className="col-md-6">
            <h5 className="text-uppercase">{name}</h5>
            <div className="price d-flex flex-row align-items-center">
              <span className="act-price"> Precio por unidad: ${price}</span>
            </div>
            <div className="price d-flex flex-row align-items-center">
              <span className="act-price">
                Cantidad: {qty}
              </span>
            </div>
            <div className="price d-flex flex-row align-items-center">
              <span className="act-price">
               Precio total del producto: ${price * qty}
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="cart mt-4 align-items-center ">
              <button
                className="btn btn-danger text-uppercase mr-2 px-4 mb-3 mx-1"
                onClick={() => eliminar(id)}
              >
                eliminar
              </button>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  </li>
      );
};
export default ItemCart;
