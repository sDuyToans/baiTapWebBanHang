import { all, call} from 'redux-saga/effects';
import { cartSaga } from '../controller/cart.saga';
import { categoriesSaga } from '../controller/categories.saga';
export function* rootSaga(){
    yield all([call(categoriesSaga), call(cartSaga)])
}