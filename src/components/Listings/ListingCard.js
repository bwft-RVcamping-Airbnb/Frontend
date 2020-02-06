import React from 'react';
import { connect } from 'react-redux';
import {  Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

import {deleteListingAction} from '../../actions/deleteListingAction';

const ListingCard = props => {

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
      <Link to={`/listing/${props.listing.id}/edit`}>
        <button>Edit</button>
      </Link>
      
      <button onClick={() => props.deleteListingAction(props.listing.id)}>Delete</button>
    </div>
  )
};

export default connect(null, {deleteListingAction})(ListingCard);