import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import rvPic from '../../img/rv_placeholder.jpg';
import './profile-listing.css';

import {fetchSingleListingAction} from '../../actions/fetchSingleListingAction';

const ListingProfile = props => {
    const[days, setDays] = useState(0);
    const[total, setTotal] = useState(0);
    const pageID = props.computedMatch.params.id;

    useEffect(() => {
        props.fetchSingleListingAction(pageID);
    }, []);

    const totalPrice = e => {
        setDays(e.target.value);
        setTotal(props.listing.price * e.target.value);
    }
        console.log(days, total);
    return(
        <div className="profile-container">
            <section className="profile-bio">
                <div className="profile-img-container">
                    {props.listing.photo === null &&
                        <img src={rvPic} alt="RV"/>
                    }
                    {props.listing.photo !== null &&
                        <img src={props.listing.photo} alt="RV"/>
                    }
                </div>
                <div className="profile-content">
                    <h1 className="profile-location">{props.listing.location}</h1>
                    <p className="profile-txt">
                        {props.listing.description}
                    </p>
                    <h3 className="profile-price">${props.listing.price}/day</h3>
                </div>
            </section>
            <section className="profile-total-container">
                <div className="profile-slider-container">
                    <input className="profile-slider" type="range" min="0" max="30" value={days} id="dayRange" onChange={e => totalPrice(e)}/>
                </div>
                
                <h4 className="profile-days">Days: {days}</h4>
                <h4 className="profile-total">Total Price: ${total.toFixed(2)}</h4>
            </section>
        </div>
    );
}

const mapStateToProps = state => ({
   
    isLoading: state.singleListing.isLoading,
    listing: state.singleListing.listing
});

export default connect(mapStateToProps, {fetchSingleListingAction })(ListingProfile);