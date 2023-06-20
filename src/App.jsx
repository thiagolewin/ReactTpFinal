import { BrowserRouter,Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar'
import './style.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from "./context/cartContext";
import {createContext} from 'react';
import CartView from './Components/CartWidget/CartWidget'
function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
          <Route path="/" element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path="/ropa/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path="/products/:sexo" element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path="/products/:category" element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path="/products/:sexo/:category" element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path="/cart" element={<CartView></CartView>}></Route>
          <Route path="*" element={<h2>404</h2>}></Route>
        </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;


