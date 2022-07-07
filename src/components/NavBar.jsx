import { NavLink } from 'react-router-dom';
import {CardWidget} from './CardWidget';

export default function NavBar() {
  return (
  <nav className="navbar navbar-light bg-light static-top ">
    <div className="container d-flex justify-content-around ">    
    <NavLink className="navbar-brand mx-5 fs-1" to="/">AtraPA2</NavLink> 
        <NavLink to="categoria/Primavera">
            <button type="button" className="btn btn-outline-success py-1 border-0 fs-5">Primavera </button>
        </NavLink>
        <NavLink to="categoria/Verano">
            <button type="button" className="btn btn-outline-danger py-1 border-0 fs-5">Verano</button>
        </NavLink>
        <NavLink to="categoria/Otonio">
            <button type="button" className="btn btn-outline-dark py-1 border-0 fs-5">Otoño</button>
        </NavLink>
        <NavLink to="categoria/Invierno">
            <button type="button" className="btn btn-outline-primary py-1 border-0 fs-5">Invierno</button>
        </NavLink> 
        <NavLink to="cart">
            <CardWidget />
        </NavLink>
            
            <NavLink className="btn btn-primary me-5 fs-5" to="" >inicio</NavLink>
            <NavLink className="btn btn-success me-5 fs-5" to="" >registrate</NavLink>
    </div>
    </nav>
  )
}
