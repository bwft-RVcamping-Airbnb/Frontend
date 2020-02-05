import React, { useState } from 'react';

import { results } from '../../api/data';

const Listings = () => {
    const [data] = useState(results);
    
    return(
        <div>
            {
                data.data.map(listing => (
                <div>
                     <p key={listing.id}>{listing.title}</p>
                    <img src={listing.img} />
                </div>
                
                ))
            }
        </div>
    )
}

export default Listings;