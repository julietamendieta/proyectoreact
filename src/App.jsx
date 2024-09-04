import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import CartProvider from './context/CartContext/CartProvider'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>} />

      </Routes>

      </BrowserRouter>

      <Footer/>
    </CartProvider>     
    </>
  )
}

export default App
