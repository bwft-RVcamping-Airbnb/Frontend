import {RV_LOGIN_FETCHING, RV_LOGIN_SUCCESS, RV_LOGIN_FAILURE} from '../actions/index';

const intialState = {
    isLoading: false,
    id: '',
    username: '',
    isLandOwner: false,
    data: '',
    errors: ''
}

export const getRVOwnerReducer = (state=intialState, action) => {

        switch(action.type){
            case RV_LOGIN_FETCHING:
                return {
                    ...state,
                    isLoading: !state.isLoading,
                }
            case RV_LOGIN_SUCCESS:
                return {
                    ...state,
                    isLoading: !state.isLoading,
                    username: 'username',
                    //delete once endpoint is working
                    data: action.payload.data
                }
            case RV_LOGIN_FAILURE: 
                return{
                    ...state,
                    errors: action.payload.error
                }

            default: 
                return state;
        }
}