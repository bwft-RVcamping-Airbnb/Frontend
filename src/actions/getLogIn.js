import axios from 'axios';
import { push } from 'connected-react-router';

import {LOGIN_FETCHING, LOGIN_SUCCESS, LOGIN_FAILURE} from './index';

export const getUserLogIn = credentials => {
    return dispatch => {

        dispatch({type: LOGIN_FETCHING});
        
        axios.post('https://rvairbnb.herokuapp.com/api/auth/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
        
            dispatch({
                type: LOGIN_SUCCESS, 
                payload: {
                    username: res.data.username,
                    id: res.data.id,
                    isLandOwner: res.data.is_land_owner
                }
            });

            dispatch(push('/dashboard'));

            console.log(res);
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAILURE, 
                payload: {errors: err}
            });

            dispatch(push('/404'));
            
            console.log(err);
        })
    }
}

