import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ListingCard from './ListingCard'; 
import Axios from 'axios';

const Listing = (props) => {
  const [listing, setListing] = useState();
 

  useEffect(() => {
    const id = props.match.params.id;

    axios
      .get()
      .then(response => {
        console.log(response.data)
        setListing(response.data)
      });
      .catch(error => {
        console.log(error); 
      });

  },[])

return (
  <div>
    <ListingCard key={listing.listing_id} listing={listing} {...props} />
  </div>
  );
}
export default Listing; 