import axios from 'axios';

import {RV_LOGIN_FETCHING, RV_LOGIN_SUCCESS, RV_LOGIN_FAILURE} from './index';

export const getRVUserLogIn = credentials => dispatch =>{

        dispatch({type: RV_LOGIN_FETCHING});

        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            //will get token from end point response (res.token)
            //once endpoint is working
            localStorage.setItem('token', 'dfsdhsdkjfdjkshd');
            dispatch({
                type: RV_LOGIN_SUCCESS, 
                payload: {data: res.data}
            });

            console.log(res);
        })
        .catch(err => {
            dispatch({
                type: RV_LOGIN_FAILURE, 
                payload: {errors: err}
            });

            console.log(err);
        })
}

