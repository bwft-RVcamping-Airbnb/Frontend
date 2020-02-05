import React from 'react';

import {
  Card,
  Grid,
  CardContent
} from '@material-ui/core';

const ListingCard = props => {

  return (
    <div>
      <h1>Listing Card</h1>
      <p>{props.listing.location} </p>

     
    </div>
    
  )
};

export default ListingCard; 