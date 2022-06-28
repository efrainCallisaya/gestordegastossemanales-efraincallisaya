/*
es un agrapador  de uin set de componenetes items .js (deberia invlirlo dentro de ItemListContainer del desafio 3)
implementa un sic mock /(promesa) datos que devuelvan un item {id, tittle, description, price, pictureURL}
*/
import { useState,useEffect } from 'react';
import fotosdefault from '../img/fotosgeneriacas.png';
import { Item } from './Item';

export const productos =[
    {id:"p1",Name:"Nombre del modelo", description:"Ropa de primavera", price:40, pictureURL:fotosdefault},
    {id:"p2",Name:"Nombre del modelo", description:"Ropa de verano", price:50, pictureURL:fotosdefault},
    {id:"p3",Name:"Nombre del modelo",description:"Ropa de invierno", price:60, pictureURL:fotosdefault},
    {id:"p4",Name:"Nombre del modelo",description:"Ropa de navidad", price:70, pictureURL:fotosdefault},
    {id:"p5",Name:"Nombre del modelo", description:"Ropa de primavera", price:40, pictureURL:fotosdefault},
    {id:"p6",Name:"Nombre del modelo", description:"Ropa de verano", price:50, pictureURL:fotosdefault},
    {id:"p7",Name:"Nombre del modelo", description:"Ropa de invierno", price:60, pictureURL:fotosdefault},
    {id:"p8",Name:"Nombre del modelo", description:"Ropa de navidad", price:70, pictureURL:fotosdefault},
];

export const ItemList =() => {
    
    const promesa = new Promise((res,rej)=>{
        setTimeout(()=>{
            res(productos);
        },5000);
    }
    )
    const[ropa,setRopa]= useState([]);
    useEffect(()=>{
        promesa.then((res)=>{
            setRopa(res);
            
    }).catch((err)=>{
        console.log(err);
    })
    },[])
    return(

        <>  
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center" id="lista-cursos">  
                {ropa.map((item)=>{
                     return(
                <Item name={item.Name} key={item.id} description={item.description} price={item.price} pictureURL={item.pictureURL}/>   
                 ) })}
                </div>
            </div>
        </section>
        
        
    </>
    )
}
