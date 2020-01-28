import { combineReducers } from 'redux';

import searchReducer from './searchReducer.js';
import searchRankingReducer from './searchRankingReducer.js';

export default combineReducers({
    search: searchReducer,
    searchRanking: searchRankingReducer
});