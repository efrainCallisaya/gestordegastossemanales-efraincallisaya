export const ItemDetail = ({ name, price, pictureURL, id, description }) => {
  return (
    <div className="container fluid pb-5">
      <div className="row d-flex justify-content-between bg-warning py-2">
        <div className="col-md-10">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <div className="text-center p-4">
                  <img id="main-image" src={pictureURL} width="100%" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product p-4">
                  <h5 className="text-uppercase" key={id}>
                    {name}
                  </h5>
                  <div className="price d-flex flex-row align-items-center">
                    <span className="act-price">${price}</span>
                  </div>
                </div>
                <p className="about mx-3">{description}</p>
                <div className="cart mt-4 align-items-center">
                  <button className="btn btn-primary text-uppercase mr-2 px-4 mb-3">
                    Detalle
                  </button>
                  <i className="fa fa-heart text-muted"></i>
                  <i className="fa fa-share-alt text-muted"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
