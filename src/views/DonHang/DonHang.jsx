import React from 'react'
import { Routes, Route} from 'react-router-dom';
import DongDonHangDonHang from '../../routes/dongDonHangDonHang/dongDonHangDonHang';
import DonHangDaTao from '../../routes/donHangDaTao/donHangDaTao';

export const DonHang = () => {
  return (
    <div className="don-hang container">
        <Routes>
            <Route index element={<DonHangDaTao/>}/>
            <Route path=':idDonHang' element={<DongDonHangDonHang/>}/>
        </Routes>
    </div>
  )
}
