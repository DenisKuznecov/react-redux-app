import { take, call, fork, put, race, select } from 'redux-saga/effects';//eslint-disable-line
import request from '../../Utils/Api';

function* takeUsers() {
    while (true) {
        debugger;
        const { amount } = yield take('FETCHING_DATA');
        debugger;
        const { data } = yield call(
            request, `https://randomuser.me/api/?results=${amount}`, 'GET',
        );
        debugger;
        yield put({
            type: 'FETCHING_DATA_SUCCESS',
            payload: data,
        });
    }
}

export default function* LayoutSaga() {
    yield [
        fork(takeUsers),
    ];
}