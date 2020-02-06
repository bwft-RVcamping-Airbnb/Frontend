import {LOGIN_FETCHING, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/index';

const intialState = {
    isLoading: false,
    id: '',
    username: '',
    isLandOwner: false,
    errors: '',
    isLoggedIn: false
}

export const getUserReducer = (state=intialState, action) => {

        switch(action.type){
            case LOGIN_FETCHING:
                return {
                    ...state,
                    isLoading: !state.isLoading,
                }
            case LOGIN_SUCCESS:
                return {
                    ...state,
                    isLoading: !state.isLoading,
                    username: action.payload.username,
                    id: action.payload.id,
                    isLandOwner: action.payload.isLandOwner,
                    isLoggedIn: !state.isLoggedIn
                }
            case LOGIN_FAILURE: 
                return{
                    ...state,
                    errors: action.payload.error,
                    isLoading: !state.isLoading
                }

            default: 
                return state;
        }
}