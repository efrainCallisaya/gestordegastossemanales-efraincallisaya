
import React from 'react';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Cart from './components/Cart.jsx'
import {FormCart} from './components/FormCart.jsx'
import CartProvider from './context/CartContext';




function App() {
  return (
    <BrowserRouter>
          <CartProvider>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer  componentesI="Saludo"/>} />
                <Route path="/categoria/:categoriaId" element={<ItemListContainer  componentesI="Saludo"/>} />
                <Route path="/detalle/:detalleId" element={  <ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/FormCart" element={<FormCart/>} />
            </Routes>
          </CartProvider>
         
    </BrowserRouter>
    
        
  )
}
// end App

export default App 