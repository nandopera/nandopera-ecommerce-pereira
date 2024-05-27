import { CartIcon } from '../../components/cart-icon/cart-icon'
import './navigation.scss'

export function Navigation() {
    return (
        <>
            <div className="navi">
                <div className='logoContainer'>
                    <h1>Coder E-commerce</h1>
                </div>
                <div className="navLinksContainer">
                    <a className='navLink'>SHOP</a>
                    <a className='navLink'>LOGIN</a>
                    <CartIcon />
                </div>
            </div>
        </>
    )
}