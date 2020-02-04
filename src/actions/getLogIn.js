import axios from 'axios';

import {LOGIN_FETCHING, LOGIN_SUCCESS, LOGIN_FAILURE} from './index';

export const getUserLogIn = credentials => dispatch =>{

        dispatch({type: LOGIN_FETCHING});

        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            localStorage.setItem('token', 'dfsdhsdkjfdjkshd');
            dispatch({
                type: LOGIN_SUCCESS, 
                payload: {data: res.data}
            });

            console.log(res);
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAILURE, 
                payload: {errors: err}
            });

            console.log(err);
        })
}

