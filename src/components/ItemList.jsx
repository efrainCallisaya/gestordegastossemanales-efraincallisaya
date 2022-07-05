/*
es un agrapador  de uin set de componenetes items .js (deberia invlirlo dentro de ItemListContainer del desafio 3)
implementa un sic mock /(promesa) datos que devuelvan un item {id, tittle, description, price, pictureURL}
*/
import { Item } from './Item';
export const ItemList =({productList}) => {
    return(
        <>  
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center" id="lista-cursos">  
                {productList.map((item)=>{
                     return(
                <Item name={item.Name} key={item.id} description={item.description} price={item.price} pictureURL={item.pictureURL}/>   
                 ) })}
                </div>
            </div>
        </section>
        
        
    </>
    )
}
