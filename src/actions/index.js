import api from "../services/api";

export function searchMusic(text) {
    return dispatch => {
        dispatch(searchMusicStarted());

        api.get(`https://api.vagalume.com.br/search.artmus?q=${text}&limit=5`)
        .then(response => {
            dispatch(searchMusicSuccess(response.data));
        })
        .catch(error => {
            dispatch(searchMusicFailure(error.message));
        })
    }
}

const searchMusicStarted = () => ({
    type: 'SEARCH_STARTED',
})

const searchMusicSuccess = (data) => ({
    type: 'SEARCH_SUCCESS',
    data
})

const searchMusicFailure = (error) => ({
    type: 'SEARCH_FAILURE',
    payload: {
        error
    }   
})