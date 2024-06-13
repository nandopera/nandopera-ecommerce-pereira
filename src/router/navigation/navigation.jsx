import { Outlet } from 'react-router-dom'
import { CartIcon } from '../../components/cart-icon/cart-icon'
import './navigation.scss'
import { NavLink } from 'react-router-dom'
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

export function Navigation() {

  const { isCartOpen } = useContext(CartContext)
  return (
    <>
      <nav className="navigation">
        <div className='logo-container'>
          <NavLink to="/">
            <h1>Coder E-commerce</h1>
          </NavLink>
        </div>
        <div className="nav-links-container">
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          <NavLink className="nav-link" to="/auth">
            LOGIN
          </NavLink>
          <CartIcon />
        </div>
        { isCartOpen && <CartDropdown /> }
      </nav>
      <Outlet />
    </>
  )
}