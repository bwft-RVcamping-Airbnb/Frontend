import {UPDATE_LISTING,UPDATE_LISTING_SUCCESS, UPDATE_LISTING_FAILURE} from '../actions';

const initialState = {
    isLoading: false,
    errors: '',
    message: ''
}


export const updateListingReducer = (state = initialState, action) => {

    switch(action.type){
        case UPDATE_LISTING: 
            return{
                ...state,
                isLoading: !state.isLoading
            }
        case UPDATE_LISTING_SUCCESS: 
            return{
                ...state,
                isLoading: !state.isLoading,
                message: action.payload
            }
        case UPDATE_LISTING_FAILURE:
            return{
                ...state,
                errors: action.payload.errors,
                message: action.payload.message
            }

        default:
            return state
    }
}