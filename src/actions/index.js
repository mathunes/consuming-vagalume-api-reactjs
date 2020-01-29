import api from "../services/api";

export function searchLyric(id) {
    return dispatch => {
        dispatch(searchLyricStarted());

        api.get(`https://api.vagalume.com.br/search.php?musid=${id}`)
        .then(response => {
            dispatch(searchLyricSuccess(response.data));
        })
        .catch(error => {
            dispatch(searchLyricFailure(error.message));
        })
    }
}

export function searchRanking(num = 5) {
    return dispatch => {
        dispatch(searchRankingStarted());

        api.get(`rank.php?type=mus,alb,art&&scope=all&limit=${num}`)
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

        api.get(`/search.mus?q=${text}&limit=10`)
        .then(response => {
            dispatch(searchMusicArtistSuccess(response.data));
        })
        .catch(error => {
            dispatch(searchMusicArtistFailure(error.message));
        })
    }
}

const searchLyricStarted = () => ({
    type: 'SEARCH_LYRIC_STARTED',
})

const searchLyricSuccess = (data) => ({
    type: 'SEARCH_LYRIC_SUCCESS',
    data
})

const searchLyricFailure = (error) => ({
    type: 'SEARCH_LYRIC_FAILURE',
    payload: {
        error
    }
})

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