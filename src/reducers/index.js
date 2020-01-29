import { combineReducers } from 'redux';

import searchReducer from './searchReducer.js';
import searchRankingReducer from './searchRankingReducer.js';
import searchLyricReducer from './searchLyricReducer.js';

export default combineReducers({
    search: searchReducer,
    searchRanking: searchRankingReducer,
    searchLyric: searchLyricReducer
});