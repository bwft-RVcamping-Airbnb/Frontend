import {axiosWithAuth} from '../utils/axiosWithAuth';
import { push } from 'connected-react-router';

import {FETCHING_SINGLE_LISTING, FETCHING_SINGLE_LISTING_SUCCESS, FETCHING_SINGLE_LISTING_FAILURE} from './index';

export const fetchSingleListingAction = id => dispatch => {

    dispatch({type: FETCHING_SINGLE_LISTING});

    axiosWithAuth().get(`/listings/${id}`)
    .then( response => {
        dispatch({ 
            type: FETCHING_SINGLE_LISTING_SUCCESS,
            payload: response.data
        });

        // dispatch(push(`/listing/${id}/edit`));
        console.log(response);
    })
    .catch(err => {
        dispatch({
            type: FETCHING_SINGLE_LISTING_FAILURE,
            payload: err
        });
        console.log(err);
    })


}
