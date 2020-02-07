import React, {useEffect} from 'react';
import { push } from 'connected-react-router';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import { Container, Row } from "reactstrap";
 
import ListingCard from './ListingCard';

import rvPic from '../../img/rv_placeholder.jpg';



import {getLoggedOut} from '../../actions/logout';
import {fetchListings} from '../../actions/fetchListings';

const Listings = props => {
    const filtered = props.listingData.filter(listing => listing.owner_id === props.user.id );

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
          
            {!props.isLoading && props.user.isLandOwner === 0 &&
        
                <Container>
                    <Row>
                    {
                        props.listingData.map(listing => (
                        <div key={listing.id}>
                            
                            <ListingCard listing={listing} />
                        </div>
                        ))
                    }
                    </Row>
                </Container>
            }

            {filtered.length === 0 && props.user.isLandOwner === 1 &&

                <h1>Please Add A Listing</h1>

            }

            {!props.isLoading && props.user.isLandOwner === 1 &&

                <Container>
                <Row>
                {
                    filtered.map(listing => (
                    <div key={listing.id}>
                        
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
    isLoading: state.listingData.isLoading,
    user: state.user
});

export default connect(mapStateToProps, {getLoggedOut, fetchListings, push})(Listings);