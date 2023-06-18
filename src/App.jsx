import { BrowserRouter,Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar'
import './style.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
          <Route path="/" element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path="/ropa/:category" element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path="/product/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path="*" element={<h2>404</h2>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;


