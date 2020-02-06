import {axiosWithAuth} from '../utils/axiosWithAuth';
import { push } from 'connected-react-router';

import {FETCHING_LISTING_DATA, FETCHING_LIST_DATA_SUCCESS, FETCHING_LIST_DATA_FAILURE} from '../actions/index';

export const fetchListingCard = id => {
        // console.log(id);
        return dispatch => {

            dispatch({type: FETCHING_LISTING_DATA});

            axiosWithAuth().get(`/listings/${id}`)
            .then( res => {
                dispatch({
                    type: FETCHING_LIST_DATA_SUCCESS,
                    payload: {
                        id: res.listing.id,
                        owner_id: res.listing.owner_id,
                        location: res.listing.location,
                        description: res.listing.description,
                        price: res.listing.price_per_day,
                        photo: res.listing.photo
                    }
                });
            })
            .catch(err => {
                dispatch({
                    type: FETCHING_LIST_DATA_FAILURE,
                    payload: err
                });
                dispatch(push('/404'));
            })
        }
}