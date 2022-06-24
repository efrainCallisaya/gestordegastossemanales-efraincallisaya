import ItemCount from './ItemListContainer/ItemCount.js'
const ejericio = ({componentesI})=>{
    return (
        <>
        <ItemCount stock ="5" inicial="1"/>
        <div >
            {componentesI}
        </div>
        </>
    )
}
export default ejericio;