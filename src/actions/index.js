import api from "../services/api";

export function searchMusic(text) {
    return dispatch => {
        dispatch(searchMusicStarted());

        api.get(`https://api.vagalume.com.br/search.artmus?q=${text}&limit=5`)
        .then(response => {
            dispatch(searchMusicSuccess(response));
        })
        .catch(error => {
            dispatch(searchMusicFailure(error));
        })
    }
}

const searchMusicStarted = () => ({
    type: 'SEARCH_MUSIC_STARTED',
})

const searchMusicSuccess = (response) => ({
    type: 'SEARCH_MUSIC_SUCCESS',
    dataReturn: response
})

const searchMusicFailure = (error) => ({
    type: 'SEARCH_MUSIC_FAILURE',
    payload: {
        error
    }   
})