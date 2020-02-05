import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListingCard from './ListingCard'; 
import axios from 'axios';

const Listing = (props) => {
  const [listing, setListing] = useState();
  const { id } = useParams;

 

return (
  <div>
    <ListingCard key={listing.listing_id} listing={listing} {...props} />
  </div>
  );
}
export default Listing; 