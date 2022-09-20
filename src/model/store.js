import { createStore, applyMiddleware, compose } from 'redux';

import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';

import createSagaMiddleWare from 'redux-saga';
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['categoriesReducer', 'cartReducer', 'donHangReducer', 'dongDonHangReducer'], 
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleWare = createSagaMiddleWare();

const middleWares = [
    logger,
    sagaMiddleWare
]

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);