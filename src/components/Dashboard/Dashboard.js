import React from 'react';
import {connect } from 'react-redux';

import {getLoggedOut} from '../../actions/logout';

import Listings from '../Listings/Listings';

const Dashboard = props => {
   
    return(
        <div className="dashboard-container">
            <h1>Welcome {props.user.username}</h1>
            <Listings />  
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect( mapStateToProps, {getLoggedOut})(Dashboard);