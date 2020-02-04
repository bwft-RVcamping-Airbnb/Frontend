import {LOGIN_FETCHING, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/index';

const intialState = {
    isLoggedIn: false, 
    user: {},
    errors: ''
}

export const rvOwnerReducer = (state=intialState, action) => {

        switch(action.type){
            case LOGIN_FETCHING:
                return {

                }
            case LOGIN_SUCCESS:
                return {

                }
            case LOGIN_FAILURE: 
                return{

                }
                
            default: 
                return state;
        }
}