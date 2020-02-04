import { combineReducers } from 'redux';
import { rvOwnerReducer } from './rvOwnerReducer';

export const rootReducer = combineReducers({
    rvOwnerLogin:  rvOwnerReducer
});
