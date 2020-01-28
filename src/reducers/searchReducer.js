const initalState = {
    loading: false,
    data: {},
    error: null
}

export default function searchReducer(state = initalState, action) {
    switch (action.type) {
        case 'SEARCH_STARTED':
            return {
                loading: true,
            };
        case 'SEARCH_SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null,
            };
        case 'SEARCH_FAILURE':
            return {
                loading: false,
                data: {},
                error: action.payload.error,
            };
        default:
            return state;
    }
}