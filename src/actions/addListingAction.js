import { push } from 'connected-react-router';
import {axiosWithAuth} from '../utils/axiosWithAuth';

import {ADDING_LISTING, ADDING_LISTING_SUCCESS ,ADDING_LISTING_FAILURE} from '../actions/index';

export const addListingAction = body => {
    return dispatch => {
        dispatch({type: ADDING_LISTING});

        axiosWithAuth().post('listings', body)
        .then( res => {
            dispatch({
                type: ADDING_LISTING_SUCCESS,
                payload: res.message
            });

            dispatch(push('/dashboard'));
            console.log(res)
        })
        .catch(err => {
            dispatch({
                type: ADDING_LISTING_FAILURE,
                payload: {
                    message: err.message,
                    errors: err
                }
            })
        })
    }
}