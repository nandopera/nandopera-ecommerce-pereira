import { CartIcon } from '../../components/cart-icon/cart-icon'
import './navigation.scss'

export function Navigation() {
    return (
        <>
            <div className="navi">
                <div className='logoContainer'>
                    <h1>Cheiro de Fulo</h1>
                    <h2>e-commerce</h2>
                </div>
                <div className="navLinksContainer">
                    <a className='navLink'>Início</a>
                    <a className='navLink'>Produtos</a>
                    <a className='navLink'>Contatos</a>
                    <a className='navLink'>SHOP</a>
                    <a className='navLink'>LOGIN</a>
                    <CartIcon />
                </div>
            </div>
        </>
    )
}