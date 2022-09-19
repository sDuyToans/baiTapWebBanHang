import { createStore, applyMiddleware, compose } from 'redux';

import logger from 'redux-logger';

import createSagaMiddleWare from 'redux-saga';
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';


const sagaMiddleWare = createSagaMiddleWare();

const middleWares = [
    logger,
    sagaMiddleWare
]
const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnhancers);

sagaMiddleWare.run(rootSaga);