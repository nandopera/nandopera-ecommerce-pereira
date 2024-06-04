import ShoppingIcon from '../../assets/shopping-cart-simple.svg'
import './cart-icon.scss'

export function CartIcon() {
    return (
        <div className="cartIconContainer">
            <img src={ShoppingIcon} className='shopIcon' />
        </div>
    )
}