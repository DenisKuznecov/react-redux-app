import { take, call, fork, put, race, select } from 'redux-saga/effects';//eslint-disable-line
import request from '../../Utils/Api';

function* takeUsers() {
    while (true) {
        const { amount } = yield take('FETCHING_DATA');
        const response  = yield call(
            request, `https://randomuser.me/api/?results=${amount}`, 'GET',
        );
        if (!response.error) {
            yield put({
                type: 'FETCHING_DATA_SUCCESS',
                payload: response.results,
            });
        } else {
            yield put({
                type: 'FETCHING_DATA_FAIL',
                payload: response.error,
            });
        }
    }
}

export default function* LayoutSaga() {
    yield [
        fork(takeUsers),
    ];
}