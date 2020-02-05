import React, { useState } from 'react';
import ListingCard from './ListingCard';
import { results } from '../../api/data';

const Listings = () => {
    const [data] = useState(results);
    
    return(
        <div>
            {
                data.data.map(listing => (
                <div key={listing.id}>
                     <ListingCard listing={Listings}/>
                </div>
                
                ))
            }
        </div>
    )
}

export default Listings;