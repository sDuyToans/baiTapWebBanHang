import CartItems from '../cart-items/cart-items';
import './cart-dropdown.scss';

const CartDropDown = () => {
    return (
        <div className='cart-dropdown-container'>
            <CartItems/>
            <button className='btn btn-success'>Go to Checkout</button>
        </div>
    )
};

export default CartDropDown;