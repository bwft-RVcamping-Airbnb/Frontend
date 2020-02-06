import React from 'react';
import { connect } from 'react-redux';
import {  Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "reactstrap";

import DeleteListing from '../DeleteListing/DeleteListing'

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
      {(props.user.isLandOwner === 1 || props.user.isLandOwner === 'yes') && 
        <>
          <Link to={`/listing/${props.listing.id}/edit`}>
          <Button color="light">Edit</Button>
          </Link>
          <Link to={`/listing/delete/${props.listing.id}/delete`}>
          <DeleteListing id={props.listing.id} />
          </Link>  
        </>
      }
       
    
    </div>
  )
};
const mapStateToProps = state => ({
  user: state.user
})
export default connect(mapStateToProps, {})(ListingCard);