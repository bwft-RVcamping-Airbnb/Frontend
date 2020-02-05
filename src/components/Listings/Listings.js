import React, { useState } from 'react';
import ListingCard from './ListingCard';
import { results } from '../../api/data';
import { Container, Row } from "reactstrap";


const Listings = () => {
    const [data] = useState(results);
    
    return(
        <Container>
            <Row>
            {
                data.data.map(listing => (
                <div key={listing.id}>
                    <ListingCard listing={listing}/>
                </div>
                
                ))
            }
            </Row>
        </Container>
    )
}

export default Listings;