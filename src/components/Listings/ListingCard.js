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

      {/* <>
      <p>{props.listing.title} </p>
      <Grid>
        <Card>
          <CardContent>
           {props.listing.title}
          </CardContent>
        </Card>
      </Grid>
      </> */}
    </div>
    
  )
};

export default ListingCard; 