import React from 'react';
import {  Link } from 'react-router-dom';
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
      <Link to={`/listing/${props.listing.id}/edit`}>
        <button>Edit</button>
      </Link>
      
      <button>Delete</button>
    </div>
  )
};

export default ListingCard;