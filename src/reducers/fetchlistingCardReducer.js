import {FETCHING_LISTING_DATA, FETCHING_LIST_DATA_SUCCESS, FETCHING_LIST_DATA_FAILURE} from '../actions';

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

export const fetchListingCardReducer = (state =initialState, action) => {

        switch(action.type){
                case FETCHING_LISTING_DATA:
                        return{
                                ...state,
                                isLoading: !state.isLoading
                        }
                case FETCHING_LIST_DATA_SUCCESS:
                        return{
                                ...state,
                                listing:{
                                        ...state.listing,
                                        id: action.payload.id,
                                        owner_id: action.payload.owner_id,
                                        location: action.payload.location,
                                        description: action.payload.decription,
                                        price: action.payload.price_per_day,
                                        photo: action.payload.photo
                                }
                        }
                
                case FETCHING_LIST_DATA_FAILURE:
                        return{
                                ...state,
                                errors: action.payload
                        }
        


                default:
                        return state;
        }
}