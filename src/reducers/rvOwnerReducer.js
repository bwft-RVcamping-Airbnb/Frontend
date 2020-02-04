import {LOGIN_FETCHING, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/index';

const intialState = {
    isLoading: false,
    data: '',
    errors: ''
}

export const getRVOwnerReducer = (state=intialState, action) => {

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
                   data: action.payload.data
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