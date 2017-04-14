import { fork } from 'redux-saga/effects';

import LayoutSaga from '../Containers/Layout/LayoutSagas';

export default function* () {
    yield [
        fork(LayoutSaga),
    ];
}
