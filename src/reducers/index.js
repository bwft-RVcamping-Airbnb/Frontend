import { combineReducers } from 'redux';
import { getRVOwnerReducer } from './rvOwnerReducer';

export const rootReducer = combineReducers({
    rvUser:  getRVOwnerReducer
});
