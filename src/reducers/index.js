import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { getUserReducer } from './getUserReducer';
import {newRVUserReducer } from './newRVUserReducer';
import {newLandUserReducer} from './newLandUserReducer';
import {fetchListingsReducer} from './fetchListingData';
import {fetchListingCardReducer} from './fetchlistingCardReducer';

const rootReducer = history =>  combineReducers({
    router: connectRouter(history),
    user:  getUserReducer,
    newRVUser: newRVUserReducer,
    newLandUser: newLandUserReducer,
    listingData: fetchListingsReducer,
    listing: fetchListingCardReducer
});

export default rootReducer;