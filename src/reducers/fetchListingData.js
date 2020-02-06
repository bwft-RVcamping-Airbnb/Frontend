import {FETCHING_LISTING_DATA, FETCHING_LIST_DATA_SUCCESS, FETCHING_LIST_DATA_FAILURE} from '../actions';

const initialState = {

    listingData: [],
    isLoading: false,
    errors: null
}


export const fetchListingsReducer = (state = initialState, action) => {

    switch(action.type){
        case FETCHING_LISTING_DATA:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        
        case FETCHING_LIST_DATA_SUCCESS:
            return {
                ...state,
                listingData: action.payload,
                isLoading: false
            }
        
        case FETCHING_LIST_DATA_FAILURE:
            return {
                ...state,
                errors: action.payload
            }

        default: 
            return state
    }
    
}