import { all, call} from 'redux-saga/effects';
import { cartSaga } from './cart/cart.saga';
import { categoriesSaga } from './categories/categories.saga';
export function* rootSaga(){
    yield all([call(categoriesSaga), call[cartSaga]])
}