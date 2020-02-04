import { combineReducers } from 'redux';
import { getUserReducer } from './getUserReducer';
import {newRVUserReducer } from './newRVUserReducer';

export const rootReducer = combineReducers({
    user:  getUserReducer,
    newRVUser: newRVUserReducer
});
