import ItemCount from './ItemCount'
import { getData} from '../mocks/fakeApi';
import { useState,useEffect } from 'react';
import { ItemList } from './ItemList';


const ItemListComponent = ({componentesI})=>{
    const [productList, setproductList] = useState([]);
    const [loading,setLoading] = useState(true);
        
    useEffect(()=>{
            getData
            .then((res)=>setproductList(res))
            .catch((err)=>console.log(err))
            .finally(()=>setLoading(false));
    },[])
    console.log(productList)
    return (
        <><ItemCount stock="5" inicial="1" />
        <div>
            {componentesI}
        { loading ? <div>Cargando...</div> : <ItemList productList={productList} />}
        </div>
        </>
        
    )
}
export default ItemListComponent;