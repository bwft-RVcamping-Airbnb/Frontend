import React, { useState } from 'react';

import { results } from '../../api/data';

const Listings = () => {
    const [data] = useState(results);
    
    return(
        <div>
            {
                data.data.map(listing => (
                <div key={listing.id}>
                     <p >{listing.title}</p>
                    <img src={listing.img} alt='' />
                </div>
                
                ))
            }
        </div>
    )
}

export default Listings;