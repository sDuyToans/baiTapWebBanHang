import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItems from '../cart-items/cart-items';
import './cart-dropdown.scss';

const CartDropDown = () => {
    const [ onNav, setOnNav ] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if(onNav) {
            navigate('/mycart');
        }
    }, [onNav])
    return (
        <div className='cart-dropdown-container'>
            <CartItems/>
            <button className='btn btn-success' onClick={() => setOnNav(!onNav)}>Go to Checkout</button>
        </div>
    )
};

export default CartDropDown;