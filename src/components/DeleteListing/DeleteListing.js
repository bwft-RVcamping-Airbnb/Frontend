import React from 'react';
import { connect } from 'react-redux';

import {deleteListingAction} from '../../actions/deleteListingAction';

const DeleteListing = props => {
    console.log(props)
    return(
        <div className="delete-btn-container">
            <button onClick={() => props.deleteListingAction(props.id)}>Delete</button>
        </div>
    )
}


export default connect(null, {deleteListingAction})(DeleteListing);