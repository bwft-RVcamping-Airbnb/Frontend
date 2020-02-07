import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {  Link } from 'react-router-dom';
import rvPic from '../../img/rv_placeholder.jpg';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardImg
} from "reactstrap";

import DeleteListing from '../DeleteListing/DeleteListing';
//import {axiosWithAuth} from '../../utils/axiosWithAuth';

import {fetchSingleListingAction} from '../../actions/fetchSingleListingAction';

const ListingCard = props => {
  
  // useEffect(() => {
  //   props.fetchSingleListingAction(1);
  //   // axiosWithAuth().get('/listings/1')
  //   // .then(res => console.log('axios call', res))
  //   // .catch(err => console.log(err));

  // }, []);

  console.log('listing card:', props);
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
        <CardImg style={{width: "30vw"}} src={rvPic} alt="RVimage"/>
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
export default connect(mapStateToProps, {fetchSingleListingAction})(ListingCard);