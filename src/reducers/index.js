import { combineReducers } from 'redux';
import { getUserReducer } from './getUserReducer';

export const rootReducer = combineReducers({
    user:  getUserReducer
});
