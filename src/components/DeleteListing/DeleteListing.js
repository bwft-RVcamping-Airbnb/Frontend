import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import {deleteListingAction} from '../../actions/deleteListingAction';

const DeleteListing = props => {
  
    return(
        <>
            <p color='danger' onClick={() => props.deleteListingAction(props.id)}>Delete</p>
        </>
    )
}


export default connect(null, {deleteListingAction})(DeleteListing);