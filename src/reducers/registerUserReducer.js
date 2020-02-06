import {  POST_NEW_USER, POST_NEW_USER_SUCCESS, POST_NEW_USER_FAILURE } from '../actions/index';

const initialState = {
    isLoading: false,
    is_land_owner: false,
    errors: '',
    success_msg: ''
}

export const registerUserReducer = (state = initialState, action) => {

    switch(action.type){
        case POST_NEW_USER: 
            return{
                ...state,
                isLoading: !state.isLoading
            }

        case POST_NEW_USER_SUCCESS:
            return{
                ...state,
                isLoading: !state.isLoading,
                success_msg: action.payload.success
            }

        case POST_NEW_USER_FAILURE:
            return{
                ...state,
                errors: action.payload.errors
            }
        default:
            return state
    }
}