import {axiosWithAuth} from '../utils/axiosWithAuth';
import { push } from 'connected-react-router';

import {FETCHING_LISTING_DATA, FETCHING_LIST_DATA_SUCCESS, FETCHING_LIST_DATA_FAILURE} from '../actions';


export const fetchListings  = () => dispatch => {

    dispatch({type:FETCHING_LISTING_DATA });

    axiosWithAuth().get('/listings')
    .then( res => {
        dispatch({
            type: FETCHING_LIST_DATA_SUCCESS,
            payload: res.data
        })
        console.log(res);
    })
    .catch( err => {
        dispatch({
            type: FETCHING_LIST_DATA_FAILURE,
            payload: err
        })

        dispatch(push('/404'));
    })
}