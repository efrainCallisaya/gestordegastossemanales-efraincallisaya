import {useState,useEffect} from 'react';
import {getItem} from '../mocks/fakeDetail';
import {ItemDetail} from './ItemDetail';


const ItemDeteailContainer = () => {

    const [data, setData] = useState({});

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getItem
        .then((res)=>setData(res))
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false));
},[])
return (
    
    <div>
        { loading ? <div className="container mt-5 mb-5">
            <div className="card row d-flex justify-content-center" aria-hidden="true">
            <div className="card-body">
                <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
                </p>
                <a href="#" tabindex="-1" className="btn btn-primary disabled placeholder col-6"></a>
            </div>
            </div>
        </div> : <ItemDetail name={data.Name} description={data.description} price={data.price} pictureURL={data.pictureURL} id={data.id}/>}
    </div>
   
    
)

}
export default ItemDeteailContainer;