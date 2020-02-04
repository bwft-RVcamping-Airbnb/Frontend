import axios from 'axios';

import {LOGIN_FETCHING, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/index';

export const getLogIn = () => dispatch =>{
        dispatch({type: LOGIN_FETCHING});
}

