import { push } from 'connected-react-router';
import {axiosWithAuth} from '../utils/axiosWithAuth';

import {UPDATE_LISTING,UPDATE_LISTING_SUCCESS, UPDATE_LISTING_FAILURE} from '.';

export const updateListingAction = (id, body) => dispatch => {
    dispatch({type: UPDATE_LISTING});

    axiosWithAuth().put(`/listings/${id}`, body)
    .then(res => {
        dispatch({
            type: UPDATE_LISTING_SUCCESS,
            payload: res.message
        })
        
        dispatch(push('/dashboard'));
        console.log(res);
    })
    .catch(err => {
        dispatch({
            type: UPDATE_LISTING_FAILURE,
            payload: {
                errors: err,
                message: err.message
            }
        });

        dispatch(push('/404'));
    })
}