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
        <div>
            <section className="profile-bio">
                <div className="profile-img-container">
                    <img src={rvPic} alt="RV in snow"/>
                </div>
                <div className="profile-content">
                    <h4 className="profile-location">{props.listing.location}</h4>
                    <p className="profile-txt">
                        {props.listing.description}
                    </p>
                    <p className="profile-price">${props.listing.price}</p>
                </div>
            </section>
            <section>
                <input type="range" min="0" max="14" value={days} id="dayRange" onChange={e => totalPrice(e)}/>
                <p>Days (Max: 14): {days}</p>
                <p>Total Price: ${total}</p>
            </section>
        </div>
    );
}

const mapStateToProps = state => ({
   
    isLoading: state.singleListing.isLoading,
    listing: state.singleListing.listing
});

export default connect(mapStateToProps, {fetchSingleListingAction })(ListingProfile);