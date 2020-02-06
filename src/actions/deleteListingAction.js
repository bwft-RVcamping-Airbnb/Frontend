import { push } from 'connected-react-router';
import {axiosWithAuth} from '../utils/axiosWithAuth';

import {DELETE_LISTING, DELETE_LISTING_SUCCESS, DELETE_LISTING_FAILURE} from '../actions/index';


export const deleteListingAction = id => dispatch => {
        dispatch({type: DELETE_LISTING});

        axiosWithAuth().delete(`/listings/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_LISTING_SUCCESS,
                payload: res.message
            })
            
            // dispatch(push('/dashboard'));

            console.log(res);
        })
        .catch(err => {
            dispatch({
                type: DELETE_LISTING_FAILURE,
                payload: {
                    errors: err,
                    message: err.message
                }
            })

            dispatch(push('/404'))
        })
}