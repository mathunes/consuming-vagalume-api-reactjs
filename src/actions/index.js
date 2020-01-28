import api from "../services/api";

export function searchMusicArtist(text) {
    return dispatch => {
        dispatch(searchMusicArtistStarted());

        api.get(`https://api.vagalume.com.br/search.artmus?q=${text}&limit=5`)
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