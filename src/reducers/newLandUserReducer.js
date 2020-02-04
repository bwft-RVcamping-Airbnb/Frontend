import { POST_NEW_LAND_USER, POST_NEW_LAND_USER_SUCCESS,  POST_NEW_LAND_USER_FAILURE } from '../actions/index';

const initialState = {
    isLoading: false,
    is_land_owner: true,
    success_msg: '',
    errors: ''
}

export const newLandUserReducer = (state = initialState, action) => {
    
    switch(action){
        case POST_NEW_LAND_USER:
            return{

            }
        case POST_NEW_LAND_USER_SUCCESS:
            return{

            }
        case POST_NEW_LAND_USER_FAILURE:
            return{

            }
            
        default: 
        return state
    }
}