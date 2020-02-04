import {  POST_NEW_RV_USER, POST_NEW_RV_USER_SUCCESS, POST_NEW_RV_USER_FAILURE } from '../actions/index';

const initialState = {
    isLoading: false,
    is_land_owner: '',
    errors: '',
    success_msg: ''
}

export const newRVUserReducer = (state = initialState, action) => {

    switch(action.type){
        case POST_NEW_RV_USER: 
            return{
                ...state,
                isLoading: !state.isLoading
            }

        case POST_NEW_RV_USER_SUCCESS:
            return{
                ...state,
                isLoading: !state.isLoading,
                success_msg: action.payload.success
            }

        case POST_NEW_RV_USER_FAILURE:
            return{
                ...state,
                errors: action.payload.errors
            }
        default:
            return state
    }
}