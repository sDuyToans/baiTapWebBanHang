import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Home from './routes/home/home';
import DanhSachSanPham from './routes/danhSachSanPham/danhSachSanPham';
import NewProduct from './routes/newProduct/newProduct';
import MyCart from './routes/myCart/myCart';
function App() {
  return (
  <Routes>
      <Route path='' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/danhsachsanpham' element={<DanhSachSanPham/>}/>
        <Route path='/add' element={<NewProduct/>}/>
        <Route path='/mycart' element={<MyCart/>}/>
      </Route>
    </Routes>
  );
}

export default App;
 