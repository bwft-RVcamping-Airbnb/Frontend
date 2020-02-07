import React, {useEffect} from 'react';
import { push } from 'connected-react-router';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { Container, Row } from "reactstrap";
 
import ListingCard from './ListingCard';
import DeleteListing from '../DeleteListing/DeleteListing';

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
            {/* RV USER LISTINGS */}
            {!props.isLoading && props.user.isLandOwner === 0 &&
                <div className="listings-main-contanier">
                    {
                        props.listingData.map(listing => (
                        <div className="listing-container" key={listing.id}>
                                <div className="image-container">
                                    {listing.photo === null &&
                                        <img src={rvPic} alt="RV"/>
                                    }
                                    {listing.photo !== null &&
                                        <img src={listing.photo} alt="RV"/>
                                    }
                                </div>
                                <div className="listing-content">
                                    <h2 className="listing-content-h2">{listing.location}</h2>
                                    <h3 className="listing-content-h3">${listing.price_per_day}</h3> 
                                </div>
                                <div className="listing-btn">
                                    <Link to={`/listing/${listing.id}/profile`} className="listing-view-btn">
                                        View Listing
                                    </Link>
                                </div>
    
                            
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
            {/* LAND OWNER LISTING */}
            {filtered.length === 0 && props.user.isLandOwner === 1 &&

                <h1>Please Add A Listing</h1>

            }

            {!props.isLoading && props.user.isLandOwner === 1 &&

                <div className="listings-main-contanier">
                {
                    filtered.map(listing => (
                    <div className="listing-container" key={listing.id}>
                            <div className="image-container">
                                {listing.photo === null &&
                                    <img src={rvPic} alt="RV"/>
                                }
                                {listing.photo !== null &&
                                    <img src={listing.photo} alt="RV"/>
                                }
                            </div>
                            <div className="listing-content">
                                <h2 className="listing-content-h2">{listing.location}</h2>
                                <h3 className="listing-content-h3">${listing.price_per_day}</h3> 
                            </div>
                            <div className="listing-btn">
                                <Link to={`/listing/${listing.id}/profile`} className="listing-view-btn">
                                    View Listing
                                </Link>
                            </div>
                        {(props.user.isLandOwner === 1 || props.user.isLandOwner === 'yes') && 
                            <>
                            <div className="listing-btn">
                                <Link to={`/listing/${listing.id}/edit`} className="listing-edit-btn">
                                    Edit
                                </Link>
                            </div>
                            <div className="listing-btn">
                                <Link to={`/listing/delete/${listing.id}/delete`} className="listing-delete-btn">
                                    <DeleteListing id={listing.id} />
                                </Link>
                            </div>        
                            </>
                        }     
                        {/* <ListingCard listing={listing} /> */}
                    </div>
                    ))
                }
                </div>

                // <Container>
                // <Row>
                // {
                //     filtered.map(listing => (
                //     <div key={listing.id}>
                //         <div className="image">
                //             <img src={rvPic} alt="RV"/>
                //         </div>
                //         <ListingCard listing={listing} />
                //     </div>
                //     ))
                // }
                // </Row>
                // </Container>
            
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