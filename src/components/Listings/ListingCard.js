import React from 'react';
import ListingCard from './Listings'
import {
  Card,
n
} from '@material-ui/core';

const ListingCard = props => {

  return (
    <>
      <Grid>
        <Card>
          <CardContent>
            <ListingCard />
          </CardContent>
        </Card>
      </Grid>
    </>
  )
};

export default ListingCard; yarn