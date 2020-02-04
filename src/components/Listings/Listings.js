import React, { useState } from 'react';

import { results } from '../../api/data';

const Listings = () => {
    const [data] = useState(results);
    
    return(
        <div>
            {
                data.data.map(listing => (
                <p key={listing.id}>{listing.title}</p>
                ))
            }
        </div>
    )
}

export default Listings;