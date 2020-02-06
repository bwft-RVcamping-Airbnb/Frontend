import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getLoggedOut} from '../../actions/logout';

const LogOut = props => {

    return(
        <>
            <Link to="" onClick={props.getLoggedOut}>
                Log Out
            </Link>
        </>
    )
}

export default connect(null, { getLoggedOut})(LogOut);
