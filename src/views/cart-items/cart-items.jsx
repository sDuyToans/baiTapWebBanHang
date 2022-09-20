import { useSelector } from 'react-redux';
import { selectCartItems } from '../../model/cart/cart.selector';
import CartItem from '../cart-item/cart-item';
import './cart-items.scss';

const CartItems = () => {
    const cartItems = useSelector(selectCartItems);
    return (
        <div className='cart-items'>
            {
            cartItems.length ? ( 
                cartItems.map((item, index) => <CartItem key={index} item={item}/>) 
                )
                : <span>Notthing in your cart</span>
            }
        </div>
    )
};

export default CartItems;