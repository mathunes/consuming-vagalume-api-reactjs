const initialState = {
    loading: false,
    dataLyric: {},
    errorLyric: null
}

export default function searchLyricReducer(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_LYRIC_STARTED':
            return ({
                loading: true
            });
        case 'SEARCH_LYRIC_SUCCESS':
            return ({
                loading: false,
                dataLyric: action.data,
                error: null
            });
        case 'SEARCH_LYRIC_FAILURE':
            return ({
                loading: false,
                dataLyric: {},
                error: action.payload.error
            });
        default:
            return state;
    }
}