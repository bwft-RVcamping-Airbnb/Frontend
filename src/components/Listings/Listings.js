import React, { useState, useEffect} from 'react';
import ListingCard from './ListingCard';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import {getLoggedOut} from '../../actions/logout';
import {fetchListings} from '../../actions/fetchListings';


const Listings = props => {

    useEffect(() => {
        props.fetchListings();
    }, []);

    return(
        <div>
            <button onClick={props.getLoggedOut}>
                logout
            </button>

            {props.isLoading &&
                <Loader type="Rings" color="red" />
            }
          
            {!props.isLoading &&
            
                props.listingData.map(listing => (
                <div key={listing.id}>
                     <ListingCard listing={listing}/>
                </div>
                
                ))
            }
        </div>
    )
}

const mapStateToProps = state => ({
    listingData:  state.listingData.listingData,
    isLoading: state.listingData.isLoading
});

export default connect(mapStateToProps, {getLoggedOut, fetchListings})(Listings);