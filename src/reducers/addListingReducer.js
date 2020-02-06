import {ADDING_LISTING, ADDING_LISTING_SUCCESS ,ADDING_LISTING_FAILURE} from '../actions/index';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const initialState = {
    isLoading: false,
    errors: '',
    message: ''
}

export const AddListingReducer = (state = initialState, action) => {

        switch(action.type){
            case ADDING_LISTING:
                return{
                    ...state,
                    isLoading: !state.isLoading
                }
            case ADDING_LISTING_SUCCESS:
                return{
                    ...state,
                    isLoading: !state.isLoading,
                    message: action.payload
                }
            
                case ADDING_LISTING_FAILURE:
                    return{
                        ...state,
                        errors: action.payload.errors,
                        message: action.payload.message
                    }
            default:
                return state
        }
}