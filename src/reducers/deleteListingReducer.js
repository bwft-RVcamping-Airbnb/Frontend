import {DELETE_LISTING, DELETE_LISTING_SUCCESS, DELETE_LISTING_FAILURE} from '../actions/index';

const initialState = {
    isLoading: false,
    errors: '',
    messages: ''
}

export const deleteListingReducer = (state = initialState, action) => {
        switch(action.type){
            case DELETE_LISTING:
                return{
                    ...state,
                    isLoading: !state.isLoading
                }
            case DELETE_LISTING_SUCCESS:
                return{
                    ...state,
                    isLoading: !state.isLoading,
                    message: action.payload
                }
            case DELETE_LISTING_FAILURE:
                return{
                    ...state,
                    errors: action.payload.errors,
                    message: action.payload.message
                }
            
            default:
                return state
        }
}