import { useState } from 'react';
import './newProduct.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addingProductStart } from '../../model/categories/categories.action';
import { selectLastID } from '../../model/categories/categories.selector';

const NewProduct = () => {
    const defaultFormField = {
        name: '',
        price: 0,
        imageUrl: '',
    }
    const dispatch = useDispatch();
    const [ newProduct, setNewProduct ] = useState(defaultFormField);
    const id = useSelector(selectLastID);
    const handleChange = (event) => {
        const { id, value } = event.target;
        setNewProduct({...newProduct, [id] : value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addingProductStart(newProduct, id));
    } 
    return (
        <form className='add-new-product container mt-5 col-6' onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <p>Tên:</p>
                <input type="text" className='form-control' placeholder='product name' id='name' onChange={handleChange}/>
            </div>
            <div className="form-group mb-3">
                <p>Hình ảnh:</p>
                <input type="text" className='form-control' placeholder='url img' id='imageUrl' onChange={handleChange}/>         
            </div>
            <div className="form-group mb-3">
                <p>Đơn giá:</p>
                <input type="number" className='form-control' placeholder='VND' id='price' onChange={handleChange}/>
            </div>
            <button className='btn btn-success'>Thêm Sản Phẩm</button>
        </form>
    )
};

export default NewProduct;