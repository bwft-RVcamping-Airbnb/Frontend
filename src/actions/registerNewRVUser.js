import axios from 'axios';
import { POST_NEW_RV_USER, POST_NEW_RV_USER_SUCCESS, POST_NEW_RV_USER_FAILURE } from '../actions/index';

export const registerNewRVUser = user => dispatch => {

    dispatch({type: POST_NEW_RV_USER});
    
    axios.post('https://rvairbnb.herokuapp.com/api/auth/register', user)
    .then(res => {
        dispatch({
            type: POST_NEW_RV_USER_SUCCESS,
            payload: {
                success: res.message
            }
        });
        console.log(res);
    })
    .catch(err => {
        dispatch({
            type: POST_NEW_RV_USER_FAILURE,
            payload: {
                errors: err
            }
        })
    })
}