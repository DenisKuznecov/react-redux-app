import { fork } from 'redux-saga/effects';

import LayoutSaga from '../Containers/UserList/UserListSagas';

export default function* () {
    yield [
        fork(LayoutSaga),
    ];
}
