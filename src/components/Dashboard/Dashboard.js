import React from 'react';
import {connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Listings from '../Listings/Listings';

const Dashboard = (props) => {
   
    return(
        <div className="dashboard-container">
            <h1>Welcome {props.user.username}</h1>
            <Link to={`/user/${props.user.id}/add`}>
                Add Listing
            </Link>
            <Listings />  
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect( mapStateToProps, {})(Dashboard);