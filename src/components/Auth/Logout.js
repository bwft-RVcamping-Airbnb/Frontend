import React from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

import {getLoggedOut} from '../../actions/logout';

const LogOut = props => {

    return(
        <>
            <button onClick={props.getLoggedOut}>
                Log Out
            </button>
        </>
    )
}

export default connect(null, { getLoggedOut})(LogOut);
