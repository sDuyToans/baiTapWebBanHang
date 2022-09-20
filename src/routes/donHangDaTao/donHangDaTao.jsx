import { useSelector } from 'react-redux';
import { selectDongDonHang } from '../../model/dongDonHang/dongDonHang.selector';
import { selectDonHang } from '../../model/donHang/donHang.selector';
import './donHangDaTao.scss';

const DonHangDaTao = () => {
    const donHang = useSelector(selectDonHang);
    const dongDonHang = useSelector(selectDongDonHang);
    const newArrDonHang = donHang.concat(dongDonHang);
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
                <tr key={index}>
                    {renderArr(newArr)}
                </tr>
            )
        })
    }
    return (
        <div className="container don-hang-da-tao mt-5">
            {
                !newArrDonHang.length
                    ?
                    <h2>There notthing here. Add product to Cart. Checkout and come back</h2>
                    :
                    <>
                        <div className="table-responsive">
                            <h2>Danh sách đơn hàng đã tạo</h2>
                            <table className="table table-primary">
                                <tbody>
                                    {renderDonHangDaTao(newArrDonHang)}
                                </tbody>
                            </table>
                        </div>
                    </>
            }
        </div>
    )
};

export default DonHangDaTao;
