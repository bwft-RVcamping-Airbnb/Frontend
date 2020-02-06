import axios from 'axios';
import { push } from 'connected-react-router';

import { POST_NEW_USER, POST_NEW_USER_SUCCESS, POST_NEW_USER_FAILURE } from '../actions/index';

export const registerUserAction = user => dispatch => {

    dispatch({type: POST_NEW_USER});
    
    axios.post('https://rvairbnb.herokuapp.com/api/auth/register', user)
    .then(res => {
        dispatch({
            type: POST_NEW_USER_SUCCESS,
            payload: {
                success: res.message
            }
        });
        dispatch(push('/register/success'));
        console.log(res);
    })
    .catch(err => {
        dispatch({
            type: POST_NEW_USER_FAILURE,
            payload: {
                errors: err
            }
        });

        dispatch(push('/404'));

        console.log(err);
    })
}