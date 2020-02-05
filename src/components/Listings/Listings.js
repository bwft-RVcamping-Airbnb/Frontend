import React, { useState, useEffect} from 'react';
import ListingCard from './ListingCard';
import {connect} from 'react-redux';

import { results } from '../../api/data';

import {getLoggedOut} from '../../actions/logout';
import {fetchListings} from '../../actions/fetchListings';


const Listings = props => {

    const [data, setData] = useState(results);

    useEffect(() => {
        props.fetchListings();
    }, []);

    return(
        <div>
            <button onClick={props.getLoggedOut}>
                logout
            </button>
          
            {
                props.listingData.listingData.map(listing => (
                <div key={listing.id}>
                     <ListingCard listing={listing}/>
                </div>
                
                ))
            }
        </div>
    )
}

const mapStateToProps = state => ({
    listingData:  state.listingData
});

export default connect(mapStateToProps, {getLoggedOut, fetchListings})(Listings);