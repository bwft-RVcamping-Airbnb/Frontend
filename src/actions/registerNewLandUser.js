import axios from 'axios';

import { POST_NEW_LAND_USER, POST_NEW_LAND_USER_SUCCESS,  POST_NEW_LAND_USER_FAILURE } from '../actions/index';

export const registerNewLandUser = user => dispatch => {
    dispatch({type: POST_NEW_LAND_USER})

    axios.post('')
    .then(res => {
        dispatch({
            type: POST_NEW_LAND_USER_SUCCESS,
            payload: {
                success: res.message
            }
        });
        console.log(res);
    })
    .catch(err => {
        dispatch({
            type: POST_NEW_LAND_USER_FAILURE,
            payload: {
                errors: err
            }
        })
    })
}