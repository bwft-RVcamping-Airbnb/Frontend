import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import {deleteListingAction} from '../../actions/deleteListingAction';

const DeleteListing = props => {
    console.log(props)
    return(
        <div className="delete-btn-container">
            <Button color='danger' onClick={() => props.deleteListingAction(props.id)}>Delete</Button>
        </div>
    )
}


export default connect(null, {deleteListingAction})(DeleteListing);