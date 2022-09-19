import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { selectProductCategories } from '../../store/categories/categories.selector';
import './danhSachSanPham.scss';
import Directory from '../../components/Directory/Directory';
const DanhSachSanPham = () => {
    const cartItems = useSelector(selectCartItems);
    const categories = useSelector(selectProductCategories);
    return (
        <div className="danh-sach-san-pham container">
            <div className="categories-sp">
                <h2>Sản phẩm trên shop</h2>
                <div className="categories-container-sanpham">
                    {categories?.map((item, index) => <Directory item={item} key={index} />)}
                </div>
            </div>
            <div className="cart-items-sp">
                <h2>Sản phẩm trong giỏ hàng</h2>
                <div className="cart-items-container-sanpham">
                    {cartItems?.map((item, index) => <Directory item={item} key={index} />)}
                </div>
            </div>
        </div>
    )
};

export default DanhSachSanPham;