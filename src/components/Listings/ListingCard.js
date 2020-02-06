import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";


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
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
};

export default ListingCard;