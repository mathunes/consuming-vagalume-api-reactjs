const initialState = {
    loadingRanking: false,
    dataRanking: {},
    errorRanking: null,
    searchRanking: false
}

export default function searchRankingReducer(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_RANKING_STARTED':
            return {
                loadingRanking: true,
                searchRanking: false
            }
        case 'SEARCH_RANKING_SUCCESS':
            return {
                loadingRanking: false,
                dataRanking: action.data,
                searchRanking: true
            }
        case 'SEARCH_RANKING_FAILURE':
            return {
                loadingRanking: false,
                dataRanking: {},
                errorRanking: action.payload.error,
                searchRanking: true
            }
        default:
            return state;
    }
}