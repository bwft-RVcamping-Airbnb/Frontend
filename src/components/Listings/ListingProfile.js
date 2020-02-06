import React, {useEffect} from 'react';
import { connect } from 'react-redux';


import {fetchSingleListingAction} from '../../actions/fetchSingleListingAction';

const ListingProfile = props => {
    const pageID = props.computedMatch.params.id;

    useEffect(() => {
        props.fetchSingleListingAction(pageID);
    }, []);

        console.log(props);
    return(
        <div>
            section
        </div>
    );
}

const mapStateToProps = state => ({
   
    isLoading: state.singleListing.isLoading,
    listing: state.singleListing.listing
});

export default connect(mapStateToProps, {fetchSingleListingAction })(ListingProfile);