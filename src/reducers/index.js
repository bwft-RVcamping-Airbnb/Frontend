import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { getUserReducer } from './getUserReducer';
import {fetchListingsReducer} from './fetchListingData';
import {fetchListingCardReducer} from './fetchlistingCardReducer';
import {AddListingReducer} from './addListingReducer';
import {updateListingReducer } from './updateListingReducer';
import {deleteListingReducer} from './deleteListingReducer';
import {registerUserReducer} from './registerUserReducer';

const rootReducer = history =>  combineReducers({
    router: connectRouter(history),
    user:  getUserReducer,
    listingData: fetchListingsReducer,
    listing: fetchListingCardReducer,
    addListing: AddListingReducer,
    updateListing: updateListingReducer,
    deleteListing: deleteListingReducer,
    registerUser: registerUserReducer
});

export default rootReducer;