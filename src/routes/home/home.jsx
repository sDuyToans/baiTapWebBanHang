import './home.scss';

import Directory from '../../views/Directory/Directory';
import { useSelector } from 'react-redux';
import { selectProductCategories } from '../../model/categories/categories.selector';
const Home = () => {
    const DataProduct = useSelector(selectProductCategories);
    return(
        <div className="container home-container">
            { DataProduct?.map((item, index) => <Directory key={index} item={item}/>)}
        </div>
    )
};

export default Home;