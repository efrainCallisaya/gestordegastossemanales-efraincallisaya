
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemsListComponent'
import ItemDetailContainer from './components/ItemDetailContainer'
function App() {
  return (
        <div>
            <NavBar/>
            <ItemListContainer  componentesI="Saludo"/>
            <ItemDetailContainer/>
        </div>
  )
}
// end App

export default App 