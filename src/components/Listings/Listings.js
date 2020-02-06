import React, {useEffect} from 'react';
import { push } from 'connected-react-router';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { Container, Row } from "reactstrap";

import ListingCard from './ListingCard';

import rvPic from '../../img/rv_placeholder.jpg';
import './listings.css';


import {getLoggedOut} from '../../actions/logout';
import {fetchListings} from '../../actions/fetchListings';

const Listings = props => {
    const filtered = props.listingData.filter(listing => listing.owner_id === props.user.id );

    useEffect(() => {
        props.fetchListings();
    }, []);

    return(
        <div>

            {props.isLoading &&
                <Loader type="Rings" color="red" />
            }
          
            {!props.isLoading && props.user.isLandOwner === 0 &&
                <div className="listings-main-contanier">
                    {
                        props.listingData.map(listing => (
                        <div className="listing-container" key={listing.id}>
                            <Link to={`/listing/${listing.id}/profile`}>
                                <div className="image-container">
                                    <img src={rvPic} alt="RV"/>
                                </div>
                                <div className="listing-content">
                                    <p>{listing.location}</p>
                                    <p>${listing.price_per_day}</p>
                                </div>
                            </Link>
                            
                            {/* <ListingCard listing={listing} /> */}
                        </div>
                        ))
                    }
                </div>
                // <Container>
                //     <Row>
                //     {
                //         props.listingData.map(listing => (
                //         <div key={listing.id}>
                //             <div className="image">
                //                 <img src={rvPic} alt="RV"/>
                //             </div>
                //             <ListingCard listing={listing} />
                //         </div>
                //         ))
                //     }
                //     </Row>
                // </Container>
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
    isLoading: state.listingData.isLoading,
    user: state.user
});

export default connect(mapStateToProps, {getLoggedOut, fetchListings, push})(Listings);