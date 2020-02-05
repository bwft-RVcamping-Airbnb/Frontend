import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import ListingCard from './ListingCard';

const Listing = props => {
    return(
        
        <div className="listing-container">
                <ListingCard />
        </div>
    )
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {})(Listing);
