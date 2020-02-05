import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import rvPic from '../../img/rv_placeholder.jpg';
import {Card, CardBody, CardTitle, CardText} from "reactstrap";


import {fetchListingCard} from '../../actions/fetchListingCard';

const ListingCard = props => {

  console.log(props);
  return (
    <div>
      <>
      <Card>
        <CardBody>
          <CardTitle>{props.listing.title}</CardTitle>
          <CardText>Location: {props.listing.location}</CardText>
          <CardText>Description: {props.listing.description}</CardText>
          <CardText>Price: ${props.listing.price_per_day} </CardText>
        </CardBody>
      </Card>
      </>
    </div>
  )
};

const mapStateToProps = state => ({
    listing: state.listing.listing,
    isLoading: state.listing.isLoading
});

export default connect(mapStateToProps, {fetchListingCard})(ListingCard);