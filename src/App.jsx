import './App.scss'
import { Auth } from './router/auth/auth'
import { Home } from './router/home/home'
import { Navigation } from './router/navigation/navigation'
export function App() {
  return (
    <>
      <Navigation />
      <Home />
    </>
  )
}