

export default function NavBar() {
  return (
  <nav className="navbar navbar-light bg-light static-top ">
    <div className="container d-flex justify-content-around ">    
    <a className="navbar-brand mx-5" href="">AtraPA2</a> 
        <a href="./pages/comprasPrimavera.html">
            <button type="button" className="btn btn-outline-success py-1 border-0">Primavera </button>
        </a>
        <a href="./pages/comprasVerano.html">
            <button type="button" className="btn btn-outline-danger py-1 border-0">Verano</button>
        </a>
        <a href="./pages/comprasOtonio.html">
            <button type="button" className="btn btn-outline-dark py-1 border-0">Otoño</button>
        </a>
        <a href="./pages/comprasInvierno.html">
            <button type="button" className="btn btn-outline-primary py-1 border-0">Invierno</button>
        </a>
            <button className="btn btn-outline-dark me-5" type="submit">
            <i className="bi-cart-fill me-1"></i>
            carrito
            <span className="badge bg-dark text-white ms-1 rounded-pill">1</span>
            </button>
            <a className="btn btn-primary me-5" href="" >inicio</a>
            <a className="btn btn-success me-5" href="" >registrate</a>
    </div>
    </nav>
  )
}
