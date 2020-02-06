import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import { Container, Row } from "reactstrap";

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
                        <Link to={`/listing/${listing.id}`} key={listing.id}>
                        <div  onClick={e => changeRoute(`/listing/${listing.id}`)}>
                            <div className="image">
                                <img src={rvPic} alt="RV"/>
                            </div>
                            <ListingCard listing={listing} />
                        </div>
                        </Link>
                        
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