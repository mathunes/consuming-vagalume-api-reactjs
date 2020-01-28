import api from "../services/api";

export function searchRankingFive() {
    return dispatch => {
        // dispatch(searchRankingFiveStarted());

        // api.get(`rank.php?type=mus,alb,art&&scope=all&limit=5&apikey={key}`)
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