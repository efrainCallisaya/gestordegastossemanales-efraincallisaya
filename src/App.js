
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Cart from './components/Cart.jsx'

function App() {
  return (
    <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer  componentesI="Saludo"/>} />
                <Route path="/categoria/:categoriaId" element={<ItemListContainer  componentesI="Saludo"/>} />
                <Route path="/detalle/:detalleId" element={  <ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
    </BrowserRouter>
    
        
  )
}
// end App

export default App 