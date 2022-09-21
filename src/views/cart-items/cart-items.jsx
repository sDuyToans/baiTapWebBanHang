import { useSelector } from 'react-redux';
import { selectCartItems } from '../../model/cart/cart.selector';
import { selectProductCategories } from '../../model/categories/categories.selector';
import CartItem from '../cart-item/cart-item';
import './cart-items.scss';

const CartItems = () => {
    const cartItems = useSelector(selectCartItems);
    const categories = useSelector(selectProductCategories);
    const arrCartItesm = () => {
        const newArr = [];
        for (let item of cartItems) {
            newArr.push(categories.find(p => p.id === item.id))
        }
        for( let i = 0; i < newArr.length; i++ ) {
            const quantity = cartItems[i].quantity
            newArr[i] = {...newArr[i], quantity}
        }
       return(
            newArr.length ? ( 
            newArr.map((item, index) =><CartItem key={index} item={item}/>) 
            )
            : <span>Notthing in your cart</span>
       )
    }
    return (
        <div className='cart-items'>
            { 
                arrCartItesm()    
            }
        </div>
    )
};

export default CartItems;