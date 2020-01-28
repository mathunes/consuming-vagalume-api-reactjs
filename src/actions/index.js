import api from "../services/api";

export function searchRanking(num = 5) {
    return dispatch => {
        dispatch(searchRankingStarted());

        api.get(`rank.php?type=mus,alb,art&&scope=all&limit=${num}&apikey={key}`)
        .then(response => {
            dispatch(searchRankingSuccess(response.data));
        })
        .catch(error => {
            dispatch(searchRankingFailure(error.message));
        })
    }
}

export function searchMusicArtist(text) {
    return dispatch => {
        dispatch(searchMusicArtistStarted());

        api.get(`/search.artmus?q=${text}&limit=5`)
        .then(response => {
            dispatch(searchMusicArtistSuccess(response.data));
        })
        .catch(error => {
            dispatch(searchMusicArtistFailure(error.message));
        })
    }
}

const searchRankingStarted = () => ({
    type: 'SEARCH_RANKING_STARTED',
})

const searchRankingSuccess = (data) => ({
    type: 'SEARCH_RANKING_SUCCESS',
    data
})

const searchRankingFailure = (error) => ({
    type: 'SEARCH_RANKING_SUCCESS',
    payload: {
        error
    }
})

const searchMusicArtistStarted = () => ({
    type: 'SEARCH_MUSIC_ARTIST_STARTED',
})

const searchMusicArtistSuccess = (data) => ({
    type: 'SEARCH_MUSIC_ARTIST_SUCCESS',
    data
})

const searchMusicArtistFailure = (error) => ({
    type: 'SEARCH_MUSIC_ARTIST_FAILURE',
    payload: {
        error
    }   
})