import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Store from './components/Store'
import  ProductDetail from './ProductDetail'

// Context
import ProductContextProvider from './context/ProductContext'
import CartContexProvider from './context/CartContex'


function App() {
  return (
    <ProductContextProvider>
      <CartContexProvider>
      <Routes>
        <Route path='products/:id' element={<ProductDetail />} />
        <Route path='products' exact element={<Store />} />
        <Route path='*' element={<Navigate to="/products" />} />
      </Routes>
      </CartContexProvider>
    </ProductContextProvider>
  )
}

export default App
