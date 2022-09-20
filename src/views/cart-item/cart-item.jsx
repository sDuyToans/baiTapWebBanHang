import './cart-item.scss';

const CartItem = (props) => {
    const { name, price, quantity } = props.item;
    return (
        <div className='cart-item-container'>
            <p>{ name }</p>
            <p>{ price } vnd x { quantity} </p>
        </div>
    )
};

export default CartItem;