import React, {useEffect} from 'react';
import { push } from 'connected-react-router';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import { Container, Row, Button } from "reactstrap";

import ListingCard from './ListingCard';

import rvPic from '../../img/rv_placeholder.jpg';
import '../../css/listings.css';


import {getLoggedOut} from '../../actions/logout';
import {fetchListings} from '../../actions/fetchListings';

const Listings = props => {
    useEffect(() => {
        props.fetchListings();
    }, []);

    const changeRoute = route => {
        props.push(route);
    }

    return(
        <div>

            {props.isLoading &&
                <Loader type="Rings" color="red" />
            }
          
            {!props.isLoading &&
        
                <Container>
                    <Row>
                    {
                        props.listingData.map(listing => (
                        <div key={listing.id}>
                            <div className="image">
                                <img src={rvPic} alt="RV"/>
                            </div>
                            <ListingCard listing={listing} />
                        </div>
                        ))
                    }
                    </Row>
                </Container>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    listingData:  state.listingData.listingData,
    isLoading: state.listingData.isLoading
});

export default connect(mapStateToProps, {getLoggedOut, fetchListings, push})(Listings);