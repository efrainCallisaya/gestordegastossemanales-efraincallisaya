//componente dedicado a mostrar informacionbreve del producto que el user clickeara luiego acceder a la informacion completa(se desarrollara mas adelntde
//el componente Item)
import { useState } from 'react';
export const Item= ({name,description, price, pictureURL,id}) => {
    return (
        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src={pictureURL} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder" key={id}>{name}</h5>
                                        <p>${price}</p>
                                        <p>{description}</p>
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <a className="btn btn-outline-dark mt-auto agregar-carrito" href="#" >Agregar al carrito</a></div>
                                </div>
                            </div>
                        </div>
    )
}