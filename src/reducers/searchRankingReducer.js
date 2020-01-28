initialState = {
    loadingRanking: false,
    dataRanking: {},
    error: null
}

export default function searchRankingReducer(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_RANKING_STARTED':
            return {
                loadingRanking: true,
            }
        case 'SEARCH_RANKING_SUCCESS':
            return {
                loadingRanking: false,
                dataRanking: action.data,
            }
        case 'SEARCH_RANKING_FAILURE':
            return {
                loadingRanking: false,
                dataRanking: {},
                error: action.payload.error
            }
        default:
            return state;
    }
}