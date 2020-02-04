import { combineReducers } from 'redux';
import { getUserReducer } from './getUserReducer';
import {newRVUserReducer } from './newRVUserReducer';
import {newLandUserReducer} from './newLandUserReducer';

export const rootReducer = combineReducers({
    user:  getUserReducer,
    newRVUser: newRVUserReducer,
    newLandUser: newLandUserReducer
});
