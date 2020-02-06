import {FETCHING_SINGLE_LISTING, FETCHING_SINGLE_LISTING_SUCCESS, FETCHING_SINGLE_LISTING_FAILURE} from '../actions/index';

const initialState = {
        listing: {
                id: '',
                owner_id: '',
                title: '',
                location: '',
                description: '',
                price: '',
                photo: ''
        },
        isLoading: false,
        errors: null
}

export const fetchSingleListingReducer = (state =initialState, action) => {

        switch(action.type){
                case FETCHING_SINGLE_LISTING:
                        return{
                                ...state,
                                isLoading: !state.isLoading
                        }
                case FETCHING_SINGLE_LISTING_SUCCESS:
                        return{
                                ...state,
                                listing:{
                                        
                                        id: action.payload.listing.id,
                                        owner_id: action.payload.listing.owner_id,
                                        location: action.payload.listing.location,
                                        description: action.payload.listing.description,
                                        price: action.payload.listing.price_per_day,
                                        photo: action.payload.listing.photo
                                },
                                isLoading: !state.isLoading
                        }
                
                case FETCHING_SINGLE_LISTING_FAILURE:
                        return{
                                ...state,
                                errors: action.payload.message
                        }
        


                default:
                        return state;
        }
}