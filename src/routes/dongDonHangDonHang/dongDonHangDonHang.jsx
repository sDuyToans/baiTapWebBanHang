import { useSelector } from 'react-redux';
import './dongDonHangDonHang.scss';
import { selectDonHang } from '../../model/donHang/donHang.selector';
import { selectDongDonHang } from '../../model/dongDonHang/dongDonHang.selector';

const DongDonHangDonHang = () => {
    const donHang = useSelector(selectDonHang);
    const dongDonHang = useSelector(selectDongDonHang);
    const renderArrItem = (items) => {
        return items.map((item, index) => <td key={index}>{item}</td>)
    }
    const convertToArray = (items) => {
        return items.map((item, index) => {
            const newArr = Object.values(item);
            return (
                <tr key={index}>
                    {renderArrItem(newArr)}
                </tr>
            )
        })
    }
    return (
        <div className='container danh-sach-don-hang mt-5'>
            {
                !donHang.length && !dongDonHang.lenght 
                ? 
                    <h2>There notthing here. Add product to Cart. Checkout and come back</h2>
                :
                <><div className="donHang">
                        <h2>Đơn Hàng</h2>
                        <div className="table-responsive">
                            <table className="table table-primary">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Tên</th>
                                        <th scope="col">Tổng trước thuế</th>
                                        <th scope="col">Tổng thuế</th>
                                        <th scope="col">Tổng tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {convertToArray(donHang)}
                                </tbody>
                            </table>
                        </div>
                    </div><div className="dongDonHang mt-3">
                            <h2>Dòng Đơn Hàng</h2>
                            <div className="table-responsive">
                                <table className="table table-primary">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Số lượng</th>
                                            <th scope="col">Đơn giá</th>
                                            <th scope="col">Tổng tiền trước thuế</th>
                                            <th scope="col">Tổng tiền thuế</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {convertToArray(dongDonHang)}
                                    </tbody>
                                </table>
                            </div>
                        </div></>
                    
            }
            
        </div>
    )
};

export default DongDonHangDonHang;