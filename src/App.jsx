import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Auth } from './router/auth/auth'
import { Home } from './router/home/home'
import { Navigation } from './router/navigation/navigation'
import { Shop } from './router/shop/shop'
export function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation/> }>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Auth />} />
          <Route path='checkout' element={{}} />
        </Route>
      </Routes>
    </>
  )
}