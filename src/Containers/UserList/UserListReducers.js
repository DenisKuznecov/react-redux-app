const initialState = {
    data: {},
    isFetching: false,
    error: false
};

export default function layoutReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCHING_DATA':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCHING_DATA_SUCCESS':
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
        case 'FETCHING_DATA_FAIL':
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        default:
            return {...state};
    }
}