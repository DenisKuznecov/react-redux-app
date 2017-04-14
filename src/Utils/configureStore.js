import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import reduxImmutableStateInvariant  from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleWare = createSagaMiddleware();

let store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleWare),
        applyMiddleware(reduxImmutableStateInvariant()),
    )
);

sagaMiddleWare.run(rootSaga);

export default store;