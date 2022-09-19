import './cart-icon.scss';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
    const toggleCartDropdown = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    }
    return (
        <div className='cart-icon-container' onClick={toggleCartDropdown}>
            <ShoppingBag/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
};

export default CartIcon;