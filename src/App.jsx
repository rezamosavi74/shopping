import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Store from './components/Store'
import  ProductDetail from './ProductDetail'
import ProductContextProvider from './context/ProductContext'


function App() {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path='products/:id' element={<ProductDetail />} />
        <Route path='products' exact element={<Store />} />
        <Route path='*' element={<Navigate to="/products" />} />
      </Routes>

    </ProductContextProvider>
  )
}

export default App
