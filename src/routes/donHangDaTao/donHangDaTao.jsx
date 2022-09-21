
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectDonHang } from '../../model/donHang/donHang.selector';
import './donHangDaTao.scss';


const DonHangDaTao = () => {
    const donHang = useSelector(selectDonHang);
    const navigate = useNavigate();
    const navigateHandler = (id) =>{
        navigate(`/donhang/${id}`)
    }
    const renderArr = (Arr) => {
        return Arr.map((item, index) => {
            return (
                <td key={index}>{item}</td>
            )
        })
    }
    const renderDonHangDaTao = (donHangDaTao) => {
        return donHangDaTao.map((item, index) => {
            const newArr = Object.values(item);
            return (
                <tr key={index} onClick={() => navigateHandler(newArr[0])}>
                        {renderArr(newArr)}
                </tr>
            )
        })
    }
    return (
        <div className="container don-hang-da-tao mt-5">
            {
                !donHang.length
                    ?
                    <h2>There notthing here. Add product to Cart. Checkout and come back</h2>
                    :
                    <>
                        <div className="table-responsive">
                            <h2>Danh sách đơn hàng đã tạo</h2>
                            <table className="table table-primary">
                                <thead>
                                    <tr>
                                            <th>ID</th>
                                            <th>Tên</th>
                                            <th>Tổng trước thuế</th>
                                            <th>Tổng thuế</th>
                                            <th>Tổng Tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderDonHangDaTao(donHang)}
                                </tbody>
                            </table>
                        </div>
                    </>
            }
        </div>
    )
};

export default DonHangDaTao;
