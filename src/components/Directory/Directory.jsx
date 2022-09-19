import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import './Directory.scss';

const Directory = (props) => {
    const dispatch = useDispatch();
    const { imageUrl, name, price, tax } = props.item;
    const cartItems = useSelector(selectCartItems);
    const addToCart = () => {
        dispatch(addItemToCart(cartItems, props.item));
    }
    return (
        <div className='card'>
            <img src={imageUrl} alt={name} className='card-img-top'/>
            <div className="card-body">
                <h5 className='card-title'>{name}</h5>
                <p className='card-price'>Giá: {price} vnd</p>
                <p className='card-tax'>Thuế: {tax} vnd</p>
                <button className='btn btn-success' onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    )
};

export default Directory;