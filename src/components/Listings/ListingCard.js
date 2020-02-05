import React from 'react';

import {
  Card,
  Grid,
  CardContent
} from '@material-ui/core';

const ListingCard = props => {

  return (
    <>
      <p>{props.listing.title} </p>
      <Grid>
        <Card>
          <CardContent>
           {props.listing.title}
          </CardContent>
        </Card>
      </Grid>
    </>
  )
};

export default ListingCard; 