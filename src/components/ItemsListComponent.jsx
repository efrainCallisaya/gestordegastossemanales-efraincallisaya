import ItemCount from './ItemCount'
import { ItemList } from './ItemList';

const ejericio = ({componentesI})=>{
    return (
        <>
        <ItemCount stock ="5" inicial="1"/>
        <div >
            {componentesI}

        </div>
        <ItemList />
        </>
    )
}
export default ejericio;