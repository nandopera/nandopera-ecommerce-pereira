import React from "react"
import ReactDOM from 'react-dom/client'
import { App }  from './App.jsx'
import './index.scss'
import { BrowserRouter } from "react-router-dom"
import { CategoriesProvider } from "./context/categoriesContext.jsx"
import { CartProvaider } from "./context/cartContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <CartProvaider>
          <App />
        </CartProvaider>
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>,
)