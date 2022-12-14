import './navigation.scss';
import { Outlet, NavLink } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';
import { useSelector } from 'react-redux';
import { selectIsCartOpen } from '../../model/cart/cart.selector';

const Navigation = () => {
    const isCartOpen = useSelector(selectIsCartOpen);
    return (
        <div className='navigation-container container'>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'>
                        <img src="https://tomahosoft.com/wp-content/uploads/2021/09/LOGO-TOMAHO-FINAL-1.png" alt="..." className='nav-logo' />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to=''>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to='/danhsachsanpham'>Danh sách sản phẩm</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to='/add'>Thêm sản phẩm mới</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to='/mycart'>Sản phẩm của tôi</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to='/donhang'>Đơn hàng đã tạo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-danger" aria-current="page" to='/baocao'>Báo Cáo</NavLink>
                            </li>
                            <li className="nav-item">
                                <CartIcon />
                                {isCartOpen && <CartDropDown />}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navigation;

