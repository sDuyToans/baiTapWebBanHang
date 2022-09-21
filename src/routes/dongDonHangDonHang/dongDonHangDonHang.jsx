import { useSelector } from 'react-redux';
import './dongDonHangDonHang.scss';
import { selectDongDonHang } from '../../model/dongDonHang/dongDonHang.selector';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const DongDonHangDonHang = () => {
    const dongDonHang = useSelector(selectDongDonHang);
    const newDongDonHang = [...dongDonHang];
    const {idDonHang} = useParams();
    const findDongDonHang = () => {
        const newArrDongDonHang = newDongDonHang.filter(item => item.id === idDonHang);
        return newArrDongDonHang;
    }
    const renderArrItem = (items) => {
        return items.map((item, index) => <td key={index}>{item}</td>)
    }
    const convertToArray = (items) => {
        return items.map((item, index) => {
            const newArr = Object.values(item);
            newArr.splice(0,1);
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
                <>
                    <div className="dongDonHang mt-3">
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
                                        {
                                        convertToArray(findDongDonHang())
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div></>
                    
            }
            
        </div>
    )
};

export default DongDonHangDonHang;