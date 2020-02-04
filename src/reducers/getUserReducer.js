import {LOGIN_FETCHING, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/index';

const intialState = {
    isLoading: false,
    id: '',
    username: '',
    isLandOwner: false,
    data: '',
    errors: ''
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
                    username: action.payload.data[0].username,
                    id: action.payload.data[0].id,
                    //delete once endpoint is working
                    data: action.payload.data[0]
                }
            case LOGIN_FAILURE: 
                return{
                    ...state,
                    errors: action.payload.error
                }

            default: 
                return state;
        }
}