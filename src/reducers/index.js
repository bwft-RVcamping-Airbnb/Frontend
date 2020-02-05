import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { getUserReducer } from './getUserReducer';
import {newRVUserReducer } from './newRVUserReducer';
import {newLandUserReducer} from './newLandUserReducer';
import {fetchListingsReducer} from './fetchListingData';

const rootReducer = history =>  combineReducers({
    router: connectRouter(history),
    user:  getUserReducer,
    newRVUser: newRVUserReducer,
    newLandUser: newLandUserReducer,
    listingData: fetchListingsReducer
});

export default rootReducer;