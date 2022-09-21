import { useDispatch, useSelector } from 'react-redux';
import { onCheckOutStart } from '../../model/cart/cart.action';
import { selectCartItems } from '../../model/cart/cart.selector';
import uuid from 'react-uuid';

import './myCart.scss';
import { selectProductCategories } from '../../model/categories/categories.selector';

const MyCart = () => {
    const categories = useSelector(selectProductCategories)
    const arrCartItesm = () => {
        const newArr = [];
        for (let item of cartItems) {
            newArr.push(categories.find(p => p.id === item.id))
        }
        for( let i = 0; i < newArr.length; i++ ) {
            const quantity = cartItems[i].quantity
            newArr[i] = {...newArr[i], quantity}
        }
        return newArr;
};
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const renderProduct = (cartArray) => {
        return cartArray?.map((item, index) => {
            return (
                <tr key={index} className='tr-tbody'>
                    <td className='img-td'>
                        <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: '100px' }} />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price} vnd</td>
                    <td>{item.quantity}</td>
                    <td>{item.price * item.quantity}</td>
                    <td>{item.price * item.quantity} vnd</td>
                    <td>{item.tax * item.quantity} vnd</td>
                    <td>{item.price * item.quantity + item.tax * item.quantity} vnd</td>
                </tr>
            )
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = uuid();
        dispatch(onCheckOutStart(arrCartItesm(), id));
    };
    return (
        <form className='mycart-container container mt-5' onSubmit={handleSubmit}>
            <h2>Danh sách sản phẩm trong giỏ hàng</h2>
            <div className="table-responsive">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Hình ảnh</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Đơn giá</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Thành tiền</th>
                            <th scope="col">Tổng trước thuế</th>
                            <th scope="col">Tổng thuế</th>
                            <th scope="col">Tổng thành tiền</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {renderProduct(arrCartItesm())}
                    </tbody>
                </table>
            </div>
            {
                !cartItems.length
                    ?
                    <p>Notthing here</p>
                    :
                    <div className='btn-thanhtoan'>
                        <button className="btn btn-success ">Thanh Toán</button>
                    </div>
            }
        </form>
    )
};

export default MyCart;